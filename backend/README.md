## How to set up the Virtual Environment
```
$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ python -m pip install -r requirements.txt
```

## Running the Application
```
1. Open up python shell (from outside of backend dir)
$ python
>>> from app import db
>>> db.create_all()
2. (Optional) Load in users by hand
>>> from yourapplication import User
>>> admin = User(username='admin', email='admin@example.com')
>>> db.session.add(admin)
>>> db.session.commit()
3. How to drop.
>>>db.drop_all()

4. Run Server
$ flask run
```