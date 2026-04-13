from uuid import UUID

from sqlalchemy import select

from app.core.extensions import db
from app.domain.models.role import Role, RoleName
from app.domain.models.user import User


class UserRepository:
    def get_by_email(self, email: str) -> User | None:
        stmt = select(User).where(User.email == email, User.deleted_at.is_(None))
        return db.session.execute(stmt).scalar_one_or_none()

    def get_by_id(self, user_id: UUID) -> User | None:
        stmt = select(User).where(User.id == user_id, User.deleted_at.is_(None))
        return db.session.execute(stmt).scalar_one_or_none()

    def list_users(self) -> list[User]:
        stmt = select(User).where(User.deleted_at.is_(None)).order_by(User.created_at.desc())
        return list(db.session.execute(stmt).scalars().all())

    def get_role(self, role_name: RoleName) -> Role | None:
        stmt = select(Role).where(Role.name == role_name)
        return db.session.execute(stmt).scalar_one_or_none()

    def ensure_role(self, role_name: RoleName, description: str) -> Role:
        role = self.get_role(role_name)
        if role:
            return role

        role = Role(name=role_name, description=description)
        db.session.add(role)
        db.session.flush()
        return role

    def add_user(self, user: User) -> User:
        db.session.add(user)
        db.session.flush()
        return user

    def commit(self) -> None:
        db.session.commit()

    def soft_delete(self, user: User) -> None:
        user.soft_delete()
        db.session.flush()
