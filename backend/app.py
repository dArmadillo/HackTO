from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import enum

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"
db = SQLAlchemy(app)

# class UserProjectStates(enum.Enum):
#     application = 1
#     active = 2
#     completed = 3

user_project = db.Table(
    "user_project",
    db.Column("user_id", db.Integer, db.ForeignKey("user.id")),
    db.Column("project_id", db.Integer, db.ForeignKey("project.id")),
)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    projects = db.relationship("Project", secondary=user_project, backref="users")

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
