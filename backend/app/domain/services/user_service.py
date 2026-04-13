from uuid import UUID

from app.core.problem_details import problem_response
from app.core.security import hash_password
from app.domain.models.role import RoleName
from app.domain.models.user import User
from app.domain.repositories.user_repository import UserRepository


class UserService:
    def __init__(self) -> None:
        self.user_repository = UserRepository()

    def list_users(self) -> list[dict]:
        users = self.user_repository.list_users()
        return [self.serialize_user(user) for user in users]

    def get_user(self, user_id: UUID):
        user = self.user_repository.get_by_id(user_id)
        if not user:
            return None, problem_response(404, "Not Found", "User not found.")
        return self.serialize_user(user), None

    def create_user(self, *, full_name: str, email: str, password: str, role: str):
        if self.user_repository.get_by_email(email):
            return None, problem_response(409, "Conflict", "Email already exists.")

        role_name = RoleName.ADMIN if role.lower() == "admin" else RoleName.USER
        role_obj = self.user_repository.ensure_role(role_name, "Administrator" if role_name == RoleName.ADMIN else "Standard user")

        user = User(
            full_name=full_name,
            email=email,
            password_hash=hash_password(password),
            role_id=role_obj.id,
            is_active=True,
        )
        self.user_repository.add_user(user)
        self.user_repository.commit()
        return self.serialize_user(user), None

    def update_user(self, user_id: UUID, payload: dict):
        user = self.user_repository.get_by_id(user_id)
        if not user:
            return None, problem_response(404, "Not Found", "User not found.")

        if "full_name" in payload and payload["full_name"]:
            user.full_name = payload["full_name"]

        if "email" in payload and payload["email"]:
            user.email = payload["email"]

        if "is_active" in payload and payload["is_active"] is not None:
            user.is_active = payload["is_active"]

        if "role" in payload and payload["role"]:
            role_name = RoleName.ADMIN if payload["role"].lower() == "admin" else RoleName.USER
            role_obj = self.user_repository.ensure_role(
                role_name,
                "Administrator" if role_name == RoleName.ADMIN else "Standard user",
            )
            user.role_id = role_obj.id

        self.user_repository.commit()
        return self.serialize_user(user), None

    def delete_user(self, user_id: UUID):
        user = self.user_repository.get_by_id(user_id)
        if not user:
            return problem_response(404, "Not Found", "User not found.")

        self.user_repository.soft_delete(user)
        self.user_repository.commit()
        return None

    @staticmethod
    def serialize_user(user: User) -> dict:
        return {
            "id": str(user.id),
            "full_name": user.full_name,
            "email": user.email,
            "role": user.role.name.value,
            "is_active": user.is_active,
            "created_at": user.created_at.isoformat(),
            "updated_at": user.updated_at.isoformat(),
        }
