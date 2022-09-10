import email
from xml.sax.handler import all_properties
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import enum
import json

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"
db = SQLAlchemy(app)
ma = Marshmallow(app)


def serializeList(listAttributes, attributes):
    for key in attributes.keys():
        if(key in listAttributes):
            attributes[key] = json.dumps(attributes[key])
    return attributes

def deserializeList(listAttributes, attributes):
    for key in attributes.keys():
        if(key in listAttributes):
            attributes[key] = json.loads(attributes[key])
    return attributes

##### ENUMS #####

class UserProjectStates(enum.Enum):
    APPLIED = 1
    ACTIVE = 2
    COMPLETED = 3

##### MODELS #####
class UserProject(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("project.id"), primary_key=True)

    state = db.Column(db.Enum(UserProjectStates))

    user = db.relationship("User", backref=db.backref("projects"))
    project = db.relationship("Project", backref=db.backref("users"))

    def __repr__(self):
        return f"[ASSOC-{self.id}] PROJECT-{self.project_id} <-> USER-{self.user_id}"


projectListAttributes = ['objectives', 'accomodations', 'technical_skills', 'soft_skills', 'requirements']
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(), nullable=False)
    signup_deadline = db.Column(db.String(), nullable=False)
    project_start_date = db.Column(db.String(), nullable=False)
    project_picture_link = db.Column(db.String(), nullable=False)
    
    #Lists
    objectives = db.Column(db.String(), nullable=False)
    accomodations = db.Column(db.String(), nullable=False)
    technical_skills = db.Column(db.String(), nullable=False)
    soft_skills = db.Column(db.String(), nullable=False)
    requirements = db.Column(db.String(), nullable=False)

    # ProjectLead (TODO: it's own table)
    project_lead_name = db.Column(db.String(), nullable=False)
    project_lead_contact = db.Column(db.String(), nullable=False)
    project_lead_picture_link = db.Column(db.String(), nullable=False)
    project_lead_pronouns = db.Column(db.String(), nullable=False)

    def __repr__(self):
        return f"[PROJECT-{self.id}] name: {self.title}"

        # Custom init function.
    def __init__(self, **kwargs):
        # Serialize Incoming List into String.
        kwargs = serializeList(projectListAttributes, kwargs)
        super(Project, self).__init__(**kwargs)


userListAttributes = ['key_skills', 'manager_notes', 'accomodations_needed']
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_pronouns = db.Column(db.String(), nullable=False)
    user_position = db.Column(db.String(), nullable=False)
    user_image_link = db.Column(db.String(), nullable=False)
    phone_number = db.Column(db.String(), nullable=False)
    biography = db.Column(db.String(), nullable=False)
    include_in_application = db.Column(db.Boolean(), default=False, nullable=False)
    
    # List
    key_skills = db.Column(db.String(), nullable=False)
    manager_notes = db.Column(db.String(), nullable=False)
    accomodations_needed = db.Column(db.String(), nullable=False)

    def __repr__(self):
        return f"[USER-{self.id}] name: {self.username}"

    # Custom init function.
    def __init__(self, **kwargs):
        # Serialize Incoming List into String.
        kwargs = serializeList(userListAttributes, kwargs)
        super(User, self).__init__(**kwargs)

##### SCHEMAS #####

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
    
    # username = ma.auto_field()
    # email = ma.auto_field()

class ProjectSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Project



##### ROUTES #####

@app.route("/")
def hello_world():
    return "Hello, World!"


user_schema = UserSchema()
users_schema = UserSchema(many=True)
@app.route("/api/users/")
def users():
    all_users = User.query.all()
    ret =  users_schema.dump(all_users)
    for obj in ret:
        obj = deserializeList(userListAttributes, obj)
    return ret

@app.route("/api/users/<id>")
def user(id):
    user = User.query.get(id)
    return deserializeList(userListAttributes, user_schema.dump(user))

project_schema = ProjectSchema()
projects_schema = ProjectSchema(many=True)
@app.route("/api/projects/")
def projects():
    all_projects = Project.query.all()
    ret =  projects_schema.dump(all_projects)
    for obj in ret:
        obj = deserializeList(projectListAttributes, obj)
    return ret

@app.route("/api/projects/<id>")
def project(id):
    project = Project.query.get(id)
    project_json = project_schema.dump(project)
    return deserializeList(projectListAttributes, project_json)