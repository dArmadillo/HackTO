from app import db
from app import User, Project, UserProject, UserProjectStates

db.drop_all()
db.create_all()

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

user1 = User(username="Victoria Diana",email="victoriadiana@amazon.ca", user_pronouns="She/her", user_position="Junior Software Developer - Co-op", user_image_link="TODO", phone_number="647-111-2222", biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", key_skills=["Java Script", "Python", "Web Development"], manager_notes=["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], accomodations_needed=["Recorded Meetings", "Executive Training"])
user2 = User(username="Alex Reinhardt",email="alex.reinhardt@amazon.ca", user_pronouns="She/her", user_position="Junior Software Developer - Co-op", user_image_link="TODO", phone_number="647-111-2222", biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", key_skills=["Java Script", "Python", "Web Development"], manager_notes=["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], accomodations_needed=["Recorded Meetings", "Executive Training"])


link1 = UserProject(
    id=1, user=user1, project=project1, state=UserProjectStates.APPLIED
)

db.session.add_all([project1, project2])
db.session.add_all([user1, user2])
db.session.commit()
