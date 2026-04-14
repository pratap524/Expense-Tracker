import os
from dataclasses import dataclass
from functools import lru_cache

from dotenv import load_dotenv


load_dotenv()


def _to_bool(value: str | None, default: bool = False) -> bool:
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


@dataclass(frozen=True)
class EnvSettings:
    APP_ENV: str
    DEBUG: bool
    SECRET_KEY: str
    DATABASE_URL: str
    JWT_SECRET_KEY: str
    JWT_ACCESS_TOKEN_EXPIRES_MINUTES: int
    JWT_REFRESH_TOKEN_EXPIRES_DAYS: int
    CORS_ORIGINS: str
    RATE_LIMIT_DEFAULT: str


@lru_cache(maxsize=1)
def get_env_settings() -> EnvSettings:
    secret_key = os.getenv("SECRET_KEY", "")
    jwt_secret = os.getenv("JWT_SECRET_KEY", "")

    if len(secret_key) < 16:
        raise ValueError("SECRET_KEY must be at least 16 characters.")
    if len(jwt_secret) < 16:
        raise ValueError("JWT_SECRET_KEY must be at least 16 characters.")

    return EnvSettings(
        APP_ENV=os.getenv("APP_ENV", "development"),
        DEBUG=_to_bool(os.getenv("DEBUG"), default=False),
        SECRET_KEY=secret_key,
        DATABASE_URL=os.getenv(
            "DATABASE_URL",
            "postgresql+psycopg://postgres:postgres@localhost:5432/expense_tracker",
        ),
        JWT_SECRET_KEY=jwt_secret,
        JWT_ACCESS_TOKEN_EXPIRES_MINUTES=max(1, int(os.getenv("JWT_ACCESS_TOKEN_EXPIRES_MINUTES", "15"))),
        JWT_REFRESH_TOKEN_EXPIRES_DAYS=max(1, int(os.getenv("JWT_REFRESH_TOKEN_EXPIRES_DAYS", "7"))),
        CORS_ORIGINS=os.getenv("CORS_ORIGINS", "http://localhost:5174"),
        RATE_LIMIT_DEFAULT=os.getenv("RATE_LIMIT_DEFAULT", "200 per hour"),
    )
