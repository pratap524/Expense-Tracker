from datetime import datetime, timedelta, timezone
from uuid import UUID

from flask import current_app
from flask_jwt_extended import create_access_token, create_refresh_token

from app.core.problem_details import problem_response
from app.core.security import hash_password, verify_password
from app.domain.models.role import RoleName
from app.domain.models.user import User
from app.domain.repositories.auth_repository import AuthRepository
from app.domain.repositories.user_repository import UserRepository


class AuthService:
    def __init__(self) -> None:
        self.user_repository = UserRepository()
        self.auth_repository = AuthRepository()

    def register_user(self, full_name: str, email: str, password: str):
        existing = self.user_repository.get_by_email(email)
        if existing:
            return None, problem_response(409, "Conflict", "Email already exists.")

        role = self.user_repository.ensure_role(RoleName.USER, "Standard user")

        user = User(
            full_name=full_name,
            email=email,
            password_hash=hash_password(password),
            role_id=role.id,
            is_active=True,
        )
        self.user_repository.add_user(user)
        self.user_repository.commit()

        return user, None

    def login(self, email: str, password: str, ip_address: str | None, user_agent: str | None):
        user = self.user_repository.get_by_email(email)
        if not user or not verify_password(password, user.password_hash):
            return None, problem_response(401, "Unauthorized", "Invalid credentials.")

        access_expires = timedelta(minutes=current_app.config["JWT_ACCESS_TOKEN_EXPIRES_MINUTES"])
        refresh_expires = timedelta(days=current_app.config["JWT_REFRESH_TOKEN_EXPIRES_DAYS"])

        additional_claims = {"role": user.role.name.value}
        access_token = create_access_token(identity=str(user.id), additional_claims=additional_claims, expires_delta=access_expires)
        refresh_token = create_refresh_token(identity=str(user.id), additional_claims=additional_claims, expires_delta=refresh_expires)

        expires_at = datetime.now(timezone.utc) + refresh_expires
        self.auth_repository.create_refresh_token(
            user_id=user.id,
            raw_token=refresh_token,
            expires_at=expires_at,
            ip_address=ip_address,
            user_agent=user_agent,
        )
        self.auth_repository.commit()

        return {
            "access_token": access_token,
            "refresh_token": refresh_token,
            "user": self.serialize_user(user),
        }, None

    def refresh(self, raw_refresh_token: str):
        token_record = self.auth_repository.find_active_token(raw_refresh_token)
        if not token_record:
            return None, problem_response(401, "Unauthorized", "Invalid refresh token.")

        if token_record.expires_at < datetime.now(timezone.utc):
            return None, problem_response(401, "Unauthorized", "Refresh token expired.")

        user_id = str(token_record.user_id)
        user = self.user_repository.get_by_id(UUID(user_id))
        if not user:
            return None, problem_response(404, "Not Found", "User not found.")

        claims = {"role": user.role.name.value}
        access_expires = timedelta(minutes=current_app.config["JWT_ACCESS_TOKEN_EXPIRES_MINUTES"])
        access_token = create_access_token(identity=user_id, additional_claims=claims, expires_delta=access_expires)
        return {"access_token": access_token}, None

    def logout(self, raw_refresh_token: str):
        self.auth_repository.revoke_token(raw_refresh_token)
        self.auth_repository.commit()

    @staticmethod
    def serialize_user(user: User) -> dict[str, str | bool]:
        return {
            "id": str(user.id),
            "email": user.email,
            "full_name": user.full_name,
            "role": user.role.name.value,
            "is_active": user.is_active,
        }
