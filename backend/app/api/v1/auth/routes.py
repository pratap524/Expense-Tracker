from flask import Blueprint, jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required

from app.api.v1.auth.schemas import LoginRequest, LogoutRequest, RegisterRequest
from app.core.problem_details import problem_response
from app.domain.services.auth_service import AuthService

auth_blueprint = Blueprint("auth", __name__)
_auth_service = AuthService()


@auth_blueprint.post("/auth/register")
def register():
    try:
        payload = RegisterRequest.from_payload(request.get_json(force=True, silent=False) or {})
    except ValueError as exc:
        return problem_response(422, "Validation Error", str(exc))

    user, error = _auth_service.register_user(payload.full_name, payload.email, payload.password)
    if error:
        return error

    return jsonify({"user": _auth_service.serialize_user(user)}), 201


@auth_blueprint.post("/auth/login")
def login():
    try:
        payload = LoginRequest.from_payload(request.get_json(force=True, silent=False) or {})
    except ValueError as exc:
        return problem_response(422, "Validation Error", str(exc))

    data, error = _auth_service.login(
        payload.email,
        payload.password,
        request.remote_addr,
        request.headers.get("User-Agent"),
    )
    if error:
        return error

    return jsonify(data), 200


@auth_blueprint.post("/auth/refresh")
def refresh_access_token():
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        return problem_response(401, "Unauthorized", "Missing bearer token.")

    raw_refresh_token = auth_header.replace("Bearer ", "", 1).strip()
    data, error = _auth_service.refresh(raw_refresh_token)
    if error:
        return error

    return jsonify(data), 200


@auth_blueprint.post("/auth/logout")
def logout():
    try:
        payload = LogoutRequest.from_payload(request.get_json(force=True, silent=False) or {})
    except ValueError as exc:
        return problem_response(422, "Validation Error", str(exc))

    _auth_service.logout(payload.refresh_token)
    return jsonify({"message": "Logged out"}), 200


@auth_blueprint.get("/auth/me")
@jwt_required()
def me():
    identity = get_jwt_identity()
    from uuid import UUID

    user, error = _auth_service.user_repository.get_by_id(UUID(identity)), None
    if not user:
        return problem_response(404, "Not Found", "User not found.")

    return jsonify({"user": _auth_service.serialize_user(user)}), 200
