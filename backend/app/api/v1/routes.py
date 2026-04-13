from flask import Blueprint

from app.api.v1.auth.routes import auth_blueprint
from app.api.v1.health.routes import health_blueprint
from app.api.v1.users.routes import users_blueprint

api_v1_blueprint = Blueprint("api_v1", __name__)
api_v1_blueprint.register_blueprint(health_blueprint)
api_v1_blueprint.register_blueprint(auth_blueprint)
api_v1_blueprint.register_blueprint(users_blueprint)
