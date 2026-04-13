from hashlib import sha256

from sqlalchemy import select

from app.core.extensions import db
from app.domain.models.refresh_token import RefreshToken


class AuthRepository:
    @staticmethod
    def hash_token(raw_token: str) -> str:
        return sha256(raw_token.encode("utf-8")).hexdigest()

    def create_refresh_token(
        self,
        *,
        user_id,
        raw_token: str,
        expires_at,
        ip_address: str | None,
        user_agent: str | None,
    ) -> RefreshToken:
        token = RefreshToken(
            user_id=user_id,
            token_hash=self.hash_token(raw_token),
            expires_at=expires_at,
            ip_address=ip_address,
            user_agent=user_agent,
        )
        db.session.add(token)
        db.session.flush()
        return token

    def find_active_token(self, raw_token: str) -> RefreshToken | None:
        token_hash = self.hash_token(raw_token)
        stmt = select(RefreshToken).where(
            RefreshToken.token_hash == token_hash,
            RefreshToken.revoked_at.is_(None),
        )
        return db.session.execute(stmt).scalar_one_or_none()

    def revoke_token(self, raw_token: str) -> None:
        token = self.find_active_token(raw_token)
        if token:
            from datetime import datetime

            token.revoked_at = datetime.utcnow()
            db.session.flush()

    def commit(self) -> None:
        db.session.commit()
