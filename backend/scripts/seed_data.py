from app import create_app
from app.core.extensions import db
from app.domain.models.role import Role, RoleName


app = create_app()


with app.app_context():
    if not Role.query.filter_by(name=RoleName.ADMIN).first():
        db.session.add(Role(name=RoleName.ADMIN, description="Administrator"))

    if not Role.query.filter_by(name=RoleName.USER).first():
        db.session.add(Role(name=RoleName.USER, description="Standard user"))

    db.session.commit()
    print("Seeded roles successfully.")
