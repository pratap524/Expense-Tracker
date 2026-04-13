from flask import jsonify

PROBLEM_JSON = "application/problem+json"


def problem_response(status: int, title: str, detail: str, type_uri: str = "about:blank"):
    body = {
        "type": type_uri,
        "title": title,
        "status": status,
        "detail": detail,
    }
    return jsonify(body), status, {"Content-Type": PROBLEM_JSON}
