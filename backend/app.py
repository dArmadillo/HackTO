from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import enum

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class UserProjectStates(enum.Enum):
    APPLIED = 1
    ACTIVE = 2
    COMPLETED = 3


class UserProject(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("project.id"), primary_key=True)

    state = db.Column(db.Enum(UserProjectStates))

    user = db.relationship("User", backref=db.backref("projects"))
    project = db.relationship("Project", backref=db.backref("users"))

    def __repr__(self):
        return f"[ASSOC-{self.id}] PROJECT-{self.project_id} <-> USER-{self.user_id}"


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


class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(), nullable=False)
    body = db.Column(db.String(), nullable=False)
    creator = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f"[PROJECT-{self.id}] name: {self.title}"
