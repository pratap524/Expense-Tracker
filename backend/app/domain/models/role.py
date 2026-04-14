import enum

from sqlalchemy import Enum, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.extensions import db
from app.infrastructure.db.base import TimestampMixin, UUIDPrimaryKeyMixin


class RoleName(str, enum.Enum):
    ADMIN = "admin"
    USER = "user"


class Role(UUIDPrimaryKeyMixin, TimestampMixin, db.Model):
    __tablename__ = "roles"

    name: Mapped[RoleName] = mapped_column(Enum(RoleName, name="role_name"), unique=True, index=True, nullable=False)
    description: Mapped[str] = mapped_column(String(255), nullable=True)

    users = relationship("User", back_populates="role", lazy="selectin")
