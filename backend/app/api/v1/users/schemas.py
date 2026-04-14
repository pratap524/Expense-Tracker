from dataclasses import dataclass

from app.api.v1.auth.schemas import _require_email, _require_string


@dataclass
class CreateUserRequest:
    full_name: str
    email: str
    password: str
    role: str

    @classmethod
    def from_payload(cls, payload: dict):
        role = payload.get("role", "user")
        if not isinstance(role, str):
            raise ValueError("role must be a string.")

        return cls(
            full_name=_require_string(payload, "full_name", min_len=2, max_len=120),
            email=_require_email(payload),
            password=_require_string(payload, "password", min_len=8, max_len=128),
            role=role,
        )


@dataclass
class UpdateUserRequest:
    full_name: str | None
    email: str | None
    role: str | None
    is_active: bool | None

    @classmethod
    def from_payload(cls, payload: dict):
        full_name = payload.get("full_name")
        email = payload.get("email")
        role = payload.get("role")
        is_active = payload.get("is_active")

        if full_name is not None:
            full_name = _require_string({"full_name": full_name}, "full_name", min_len=2, max_len=120)

        if email is not None:
            email = _require_email({"email": email})

        if role is not None and not isinstance(role, str):
            raise ValueError("role must be a string.")

        if is_active is not None and not isinstance(is_active, bool):
            raise ValueError("is_active must be a boolean.")

        return cls(full_name=full_name, email=email, role=role, is_active=is_active)

    def to_dict(self) -> dict:
        data = {
            "full_name": self.full_name,
            "email": self.email,
            "role": self.role,
            "is_active": self.is_active,
        }
        return {k: v for k, v in data.items() if v is not None}
