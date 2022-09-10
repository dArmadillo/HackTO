from app import db
from app import User, Project

db.drop_all()
db.create_all()

darren = User(username="darren", email="dar.liu1224@gmail.com")
project1 = Project(
    title="Project 1",
    description="This is a project.",
    body="This the description of a project",
    creator="Amazon Inc.",
)
db.session.add(darren)
db.session.add(project1)
db.session.commit()
