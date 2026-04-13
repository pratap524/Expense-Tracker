from flask import Flask, jsonify
from werkzeug.exceptions import HTTPException


PROBLEM_JSON = "application/problem+json"


def register_error_handlers(app: Flask) -> None:
    @app.errorhandler(HTTPException)
    def handle_http_exception(exc: HTTPException):
        response = {
            "type": "about:blank",
            "title": exc.name,
            "status": exc.code,
            "detail": exc.description,
        }
        return jsonify(response), exc.code, {"Content-Type": PROBLEM_JSON}

    @app.errorhandler(Exception)
    def handle_unexpected_error(_: Exception):
        response = {
            "type": "about:blank",
            "title": "Internal Server Error",
            "status": 500,
            "detail": "An unexpected error occurred.",
        }
        return jsonify(response), 500, {"Content-Type": PROBLEM_JSON}
