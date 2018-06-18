# practice-app

This application is for the beginners to learn how to build web application.

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
docker run -p 127.0.0.1:5432:5432 --name mydb -e POSTGRES_USER=[YOUR USER NAME] -d postgres
```

And you can use psql by the following command.

```bash
docker run -it --rm --link mydb:postgres postgres psql -h postgres -U [YOUR USER NAME]
```

If you use docker for postgresql, you need to start or end the container.

```bash
yarn startdb
yarn stopdb
```
