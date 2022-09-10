from app import db
from app import User, Project, UserProject, UserProjectStates

db.drop_all()
db.create_all()

project1 = Project(
    title="Project 1",
    description="This is a project.",
    objectives=["OBJECTIVE 1", "OBJECTIVE 2"],
    creator="Amazon Inc.",
)
project2 = Project(
    title="Project 2",
    description="This is a project.",
    objectives=["OBJECTIVE 1", "OBJECTIVE 2"],
    creator="Facebook Inc.",
)

darren = User(username="darren", email="dar.liu1224@gmail.com")
cheryl = User(username="cheryl", email="cheryl.chen.gura@gmail.com")

link1 = UserProject(
    id=1, user=darren, project=project1, state=UserProjectStates.APPLIED
)

db.session.add_all([project1, project2])
db.session.add_all([darren, cheryl])
db.session.commit()
