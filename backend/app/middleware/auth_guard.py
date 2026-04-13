from functools import wraps

from flask_jwt_extended import get_jwt, jwt_required

from app.core.problem_details import problem_response


def require_roles(*allowed_roles: str):
    """Protect endpoint by requiring one of the given roles."""

    def decorator(fn):
        @wraps(fn)
        @jwt_required()
        def wrapper(*args, **kwargs):
            claims = get_jwt()
            role = claims.get("role")

            if role not in allowed_roles:
                return problem_response(403, "Forbidden", "Insufficient permissions.")

            return fn(*args, **kwargs)

        return wrapper

    return decorator
