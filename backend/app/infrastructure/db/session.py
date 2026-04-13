from contextlib import contextmanager
from typing import Iterator

from app.core.extensions import db


@contextmanager
def session_scope() -> Iterator:
    """Provide a transactional scope around a set of operations."""
    try:
        yield db.session
        db.session.commit()
    except Exception:
        db.session.rollback()
        raise
