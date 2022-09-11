## How to set up the Virtual Environment
```
$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ python -m pip install -r requirements.txt
```
You might need to hand install `flask_alchemy` and then `deactivate` and then re-enter venv.

## How to run application
1. Load dummy data
```
$ python load_data
```
2. Run Server (`localhost:5000` by default)
```
$ flask run
```


## Adding stuff by hand (note running load_Data clears all data first)
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

```
