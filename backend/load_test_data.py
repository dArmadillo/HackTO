from app import db
from app import User, Project

db.drop_all()
db.create_all()

project1 = Project(
    title="Project 1",
    description="This is a project.",
    body="This the description of a project",
    creator="Amazon Inc.",
)
project2 = Project(
    title="Project 2",
    description="This is a project.",
    body="This the description of a project",
    creator="Facebook Inc.",
)

darren = User(username="darren", email="dar.liu1224@gmail.com")
cheryl = User(username="cheryl", email="cheryl.chen.gura@gmail.com")

project1.users.append(darren)
project1.users.append(cheryl)
db.session.add_all([project1, project2])
db.session.add_all([darren, cheryl])
db.session.commit()
