from uuid import UUID

from flask import Blueprint, jsonify, request
from flask_jwt_extended import get_jwt_identity, get_jwt, jwt_required
from pydantic import ValidationError

from app.api.v1.users.schemas import CreateUserRequest, UpdateUserRequest
from app.core.problem_details import problem_response
from app.domain.services.user_service import UserService
from app.middleware.auth_guard import require_roles

users_blueprint = Blueprint("users", __name__)
_user_service = UserService()


@users_blueprint.get("/users")
@require_roles("admin")
def list_users():
    return jsonify({"items": _user_service.list_users()}), 200


@users_blueprint.post("/users")
@require_roles("admin")
def create_user():
    try:
        payload = CreateUserRequest.model_validate(request.get_json(force=True, silent=False))
    except ValidationError as exc:
        return problem_response(422, "Validation Error", str(exc))

    data, error = _user_service.create_user(
        full_name=payload.full_name,
        email=payload.email,
        password=payload.password,
        role=payload.role,
    )
    if error:
        return error

    return jsonify({"user": data}), 201


@users_blueprint.get("/users/<uuid:user_id>")
@jwt_required()
def get_user(user_id: UUID):
    identity = get_jwt_identity()
    claims = get_jwt()

    if claims.get("role") != "admin" and identity != str(user_id):
        return problem_response(403, "Forbidden", "Cannot access this resource.")

    data, error = _user_service.get_user(user_id)
    if error:
        return error

    return jsonify({"user": data}), 200


@users_blueprint.put("/users/<uuid:user_id>")
@jwt_required()
def update_user(user_id: UUID):
    identity = get_jwt_identity()
    claims = get_jwt()

    if claims.get("role") != "admin" and identity != str(user_id):
        return problem_response(403, "Forbidden", "Cannot update this user.")

    try:
        payload = UpdateUserRequest.model_validate(request.get_json(force=True, silent=False))
    except ValidationError as exc:
        return problem_response(422, "Validation Error", str(exc))

    update_data = payload.model_dump(exclude_none=True)
    if claims.get("role") != "admin":
        update_data.pop("role", None)

    data, error = _user_service.update_user(user_id, update_data)
    if error:
        return error

    return jsonify({"user": data}), 200


@users_blueprint.delete("/users/<uuid:user_id>")
@require_roles("admin")
def delete_user(user_id: UUID):
    error = _user_service.delete_user(user_id)
    if error:
        return error

    return "", 204
