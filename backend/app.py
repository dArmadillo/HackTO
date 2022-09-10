from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"
db = SQLAlchemy(app)


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
