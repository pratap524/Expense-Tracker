from dataclasses import dataclass

from app.config.env import get_env_settings


@dataclass(frozen=True)
class Settings:
    app_env: str
    debug: bool
    secret_key: str
    database_url: str
    jwt_secret_key: str
    jwt_access_token_expires_minutes: int
    jwt_refresh_token_expires_days: int
    cors_origins: list[str]
    rate_limit_default: str

    def to_flask_config(self) -> dict[str, object]:
        return {
            "ENV": self.app_env,
            "DEBUG": self.debug,
            "SECRET_KEY": self.secret_key,
            "SQLALCHEMY_DATABASE_URI": self.database_url,
            "SQLALCHEMY_TRACK_MODIFICATIONS": False,
            "JWT_SECRET_KEY": self.jwt_secret_key,
            "JWT_ACCESS_TOKEN_EXPIRES_MINUTES": self.jwt_access_token_expires_minutes,
            "JWT_REFRESH_TOKEN_EXPIRES_DAYS": self.jwt_refresh_token_expires_days,
            "CORS_ORIGINS": self.cors_origins,
            "RATELIMIT_DEFAULT": self.rate_limit_default,
            "PROPAGATE_EXCEPTIONS": self.debug,
        }


def get_settings() -> Settings:
    env = get_env_settings()

    origins = [origin.strip() for origin in env.CORS_ORIGINS.split(",") if origin.strip()]

    return Settings(
        app_env=env.APP_ENV,
        debug=env.DEBUG,
        secret_key=env.SECRET_KEY,
        database_url=env.DATABASE_URL,
        jwt_secret_key=env.JWT_SECRET_KEY,
        jwt_access_token_expires_minutes=env.JWT_ACCESS_TOKEN_EXPIRES_MINUTES,
        jwt_refresh_token_expires_days=env.JWT_REFRESH_TOKEN_EXPIRES_DAYS,
        cors_origins=origins,
        rate_limit_default=env.RATE_LIMIT_DEFAULT,
    )
