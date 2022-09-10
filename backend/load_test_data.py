from app import db
from app import User, Project, UserProject, UserProjectStates

db.drop_all()
db.create_all()
# class Project(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(120), nullable=False)
#     description = db.Column(db.String(), nullable=False)
#     signup_deadline = db.Column(db.String(), nullable=False)
#     project_start_date = db.Column(db.String(), nullable=False)
#     project_picture_link = db.Column(db.String(), nullable=False)
    
#     #Lists
#     objectives = db.Column(db.String(), nullable=False)
#     technical_skills = db.Column(db.String(), nullable=False)
#     soft_skills = db.Column(db.String(), nullable=False)
#     requirements = db.Column(db.String(), nullable=False)

#     # ProjectLead (TODO: it's own table)
#     project_lead_name = db.Column(db.String(), nullable=False)
#     project_lead_contact = db.Column(db.String(), nullable=False)
#     project_lead_pronouns_link = db.Column(db.String(), nullable=False)
#     project_lead_pronouns = db.Column(db.String(), nullable=False)

project1 = Project(
    title="Alexa Code Refactoring",
    description="Alexa’s Language Engineering Developer Experience team builds tools enabling language engineers, scientists, SDEs and product managers to build premier conversational experiences for millions of Alexa's customers. We believe speech to be a pervasive and superior mode of interacting with automated systems and are committed to maintaining our industry-leading position in this space.",
    signup_deadline="August 2, 2022",
    project_start_date ="tomorrow",
    project_picture_link="https://google.ca",

    objectives=["Develop an advanced understanding of object oriented design", "Gain experience working with nondistributed systems", "Work and learn from industry expert mentors"],
    accomodations=["multi-timezone", "Remote", "Mentors available"],
    technical_skills=["Machine learning", "Java", "Linux/Unix", "Machine learning"],
    soft_skills=["Technical collboration"],
    requirements=["2 hours/week","2 month minimum commitment"],

    project_lead_name="Jeff Lee",
    project_lead_contact="jeff.lee3@amazon.com",
    project_lead_picture_link="TODO",
    project_lead_pronouns="He/Him.",
)
project2 = Project(
    title="Alexa2 Code Refactoring",
    description="Alexa’s Language Engineering Developer Experience team builds tools enabling language engineers, scientists, SDEs and product managers to build premier conversational experiences for millions of Alexa's customers. We believe speech to be a pervasive and superior mode of interacting with automated systems and are committed to maintaining our industry-leading position in this space.",
    signup_deadline="August 2, 2022",
    project_start_date ="tomorrow",
    project_picture_link="https://google.ca",

    objectives=["Develop an advanced understanding of object oriented design", "Gain experience working with nondistributed systems", "Work and learn from industry expert mentors"],
    accomodations=["multi-timezone", "Remote", "Mentors available"],
    technical_skills=["Machine learning", "Java", "Linux/Unix", "Machine learning"],
    soft_skills=["Technical collboration"],
    requirements=["2 hours/week","2 month minimum commitment"],

    project_lead_name="Jeff Lee",
    project_lead_contact="jeff.lee3@amazon.com",
    project_lead_picture_link="TODO",
    project_lead_pronouns="He/Him.",
)

darren = User(username="darren", email="dar.liu1224@gmail.com")
cheryl = User(username="cheryl", email="cheryl.chen.gura@gmail.com")

link1 = UserProject(
    id=1, user=darren, project=project1, state=UserProjectStates.APPLIED
)

db.session.add_all([project1, project2])
db.session.add_all([darren, cheryl])
db.session.commit()
