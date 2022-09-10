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


projectListAttributes = ['objectives']
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(), nullable=False)
    objectives = db.Column(db.String(), nullable=False)
    creator = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f"[PROJECT-{self.id}] name: {self.title}"

        # Custom init function.
    def __init__(self, **kwargs):
        # Serialize Incoming List into String.
        kwargs = serializeList(projectListAttributes, kwargs)
        super(Project, self).__init__(**kwargs)




# - title (string)
# - description (string)
# - objectives (list[string])
# - accommodations (list[string])
# - technical skills applied (list[String])
# - Soft skills applied (list[String])
# - requirements [list[String]]

# - signup deadline (Date)
# - project start date (Date)
# - projectSize (integer)
# - projectPicture (String)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f"[USER-{self.id}] name: {self.username}"

    # Custom init function.
    def __init__(self, **kwargs):
        super(User, self).__init__(**kwargs)
        self.level = 0

##### SCHEMAS #####

class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User
    
    username = ma.auto_field()
    email = ma.auto_field()

class ProjectSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Project
    
    title = ma.auto_field()
    description = ma.auto_field()
    objectives = ma.auto_field()
    creator = ma.auto_field()



##### ROUTES #####

@app.route("/")
def hello_world():
    return "Hello, World!"


user_schema = UserSchema()
users_schema = UserSchema(many=True)
@app.route("/api/users/")
def users():
    all_users = User.query.all()
    return users_schema.dump(all_users)

@app.route("/api/users/<id>")
def user(id):
    user = User.query.get(id)
    return user_schema.dump(user)

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
    print(project)
    return project_schema.dump(project)