# practice-app

This application is meant for learning the basic full stack development.

## requirement

### Feature
Try to add user information and using react app and @material-ui/core. I also try resolve some commentted need code.
I am not a expart but i try it.

### Environment

If the app works on localhost, that's goal.
We will check them on our own.

## how to use this application

```bash
git clone https://github.com/mondolmislam/practice-app.git
cd practice-app
yarn install
```

## Prepare the database

You can use docker in order to install postgres.
If you want to use docker, you can download image and create the container for postgresql.

```bash
docker run -p 127.0.0.1:5432:5432 --name $DATBASENAME -e POSTGRES_USER=$USERNAME -d postgres
```

And you can use psql by the following command.

```bash
docker run -it --rm --link $DATABASENAME:postgres postgres psql -h postgres -U $USERNAME
```

If you use docker for postgresql, you need to start or end the container.

```bash
yarn startdb
yarn stopdb
```
