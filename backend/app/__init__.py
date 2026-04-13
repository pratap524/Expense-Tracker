from flask import Flask

from app.api.v1.routes import api_v1_blueprint
from app.config.settings import get_settings
from app.core.extensions import init_extensions
from app.domain import models as _models  # noqa: F401
from app.middleware.error_handler import register_error_handlers


def create_app() -> Flask:
    """Application factory used by Flask tooling and production servers."""
    app = Flask(__name__)

    settings = get_settings()
    app.config.update(settings.to_flask_config())

    init_extensions(app)
    register_error_handlers(app)

    app.register_blueprint(api_v1_blueprint, url_prefix="/api/v1")

    return app
