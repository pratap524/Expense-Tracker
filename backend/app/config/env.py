from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class EnvSettings(BaseSettings):
    """Typed environment variables with strict validation."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )

    APP_ENV: str = Field(default="development")
    DEBUG: bool = Field(default=False)

    SECRET_KEY: str = Field(min_length=16)
    DATABASE_URL: str = Field(default="postgresql+psycopg://postgres:postgres@localhost:5432/expense_tracker")

    JWT_SECRET_KEY: str = Field(min_length=16)
    JWT_ACCESS_TOKEN_EXPIRES_MINUTES: int = Field(default=15, ge=1)
    JWT_REFRESH_TOKEN_EXPIRES_DAYS: int = Field(default=7, ge=1)

    CORS_ORIGINS: str = Field(default="http://localhost:5174")

    RATE_LIMIT_DEFAULT: str = Field(default="200 per hour")


@lru_cache(maxsize=1)
def get_env_settings() -> EnvSettings:
    return EnvSettings()
