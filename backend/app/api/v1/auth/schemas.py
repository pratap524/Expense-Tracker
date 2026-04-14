import re
from dataclasses import dataclass


EMAIL_PATTERN = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def _require_string(payload: dict, key: str, min_len: int = 1, max_len: int | None = None) -> str:
    value = payload.get(key)
    if not isinstance(value, str):
        raise ValueError(f"{key} must be a string.")

    value = value.strip()
    if len(value) < min_len:
        raise ValueError(f"{key} must be at least {min_len} characters.")
    if max_len is not None and len(value) > max_len:
        raise ValueError(f"{key} must be at most {max_len} characters.")

    return value


def _require_email(payload: dict, key: str = "email") -> str:
    email = _require_string(payload, key, min_len=5, max_len=255)
    if not EMAIL_PATTERN.match(email):
        raise ValueError("email must be a valid email format.")
    return email


@dataclass
class RegisterRequest:
    full_name: str
    email: str
    password: str

    @classmethod
    def from_payload(cls, payload: dict):
        return cls(
            full_name=_require_string(payload, "full_name", min_len=2, max_len=120),
            email=_require_email(payload),
            password=_require_string(payload, "password", min_len=8, max_len=128),
        )


@dataclass
class LoginRequest:
    email: str
    password: str

    @classmethod
    def from_payload(cls, payload: dict):
        return cls(
            email=_require_email(payload),
            password=_require_string(payload, "password", min_len=8, max_len=128),
        )


@dataclass
class LogoutRequest:
    refresh_token: str

    @classmethod
    def from_payload(cls, payload: dict):
        return cls(refresh_token=_require_string(payload, "refresh_token", min_len=10))
