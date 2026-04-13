from uuid import uuid4

from app.domain.models.role import RoleName
from app.domain.services.auth_service import AuthService


class StubUserRepository:
    def __init__(self):
        self._users_by_email = {}
        self.committed = False

    def get_by_email(self, email):
        return self._users_by_email.get(email)

    def ensure_role(self, role_name, description):
        return type("RoleObj", (), {"id": uuid4(), "name": role_name, "description": description})()

    def add_user(self, user):
        self._users_by_email[user.email] = user
        return user

    def commit(self):
        self.committed = True


def test_register_user_creates_user_successfully():
    service = AuthService()
    service.user_repository = StubUserRepository()

    user, error = service.register_user("John Doe", "john@example.com", "Password123")

    assert error is None
    assert user is not None
    assert user.full_name == "John Doe"
    assert user.email == "john@example.com"
    assert service.user_repository.committed is True


def test_register_user_rejects_duplicate_email():
    service = AuthService()
    repo = StubUserRepository()

    existing = type("ExistingUser", (), {"email": "john@example.com", "id": uuid4(), "role": type("R", (), {"name": RoleName.USER})()})()
    repo._users_by_email["john@example.com"] = existing

    service.user_repository = repo

    user, error = service.register_user("John Doe", "john@example.com", "Password123")

    assert user is None
    assert error is not None
