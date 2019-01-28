# practice-app

This application is meant for learning the basic full stack development.

## requirement

### Feature

You need to implement an app which can store the user information and show them.

The style of the frontend depends on you. If you know React deeply, please try to use [Material UI](https://material-ui.com/).

The directory structure for the backend follows [Node.js best practice](https://github.com/i0natan/nodebestpractices). Feel free to add some feature like the user authentication, some other data using NOSQL, or something like that.

### Git

Before starting the development, you need to create another branch whose name is your name.

You should commit the files frequently in order to track the modification.
We will check the quality of the commit message.

If you don't know Git, please learn to use it.

### Environment

If the app works on localhost, that's goal.
We will check them on our own.

## how to use this application

```bash
git clone https://github.com/maaaashin324/practice-app.git
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
