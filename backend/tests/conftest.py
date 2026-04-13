import os

import pytest

from app import create_app


@pytest.fixture
def app():
    os.environ.setdefault("APP_ENV", "test")
    os.environ.setdefault("DEBUG", "false")
    os.environ.setdefault("SECRET_KEY", "test-secret-key-123456")
    os.environ.setdefault("JWT_SECRET_KEY", "test-jwt-secret-key-123456")
    os.environ.setdefault("DATABASE_URL", "sqlite+pysqlite:///:memory:")

    app = create_app()
    app.config.update(TESTING=True)
    yield app


@pytest.fixture
def client(app):
    return app.test_client()
