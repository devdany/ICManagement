1. insert DB Information in config.json

for example,
```$xslt
{
  "db": {
    "dbschema": "DanyDBSchema",
    "username": "foo",
    "password": "foo1234",
    "host": "localhost",
    "dialect": "mysql"
  }
}
```

2. npm install

3. npm start (nodemon script)

4. insert to user row in DB

5. do test {"email": "foo", "password": "foo1234"} by POST http://localhost:3000/users/login