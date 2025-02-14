# File Parse System

File Parse System.

## Local development environment

We use docker and docker-compose for development environment.

### Building and starting the container

Under the app folder execute the following commands:

```bash
$ docker-compose up --build
docker compose up --build -d
docker compose up
```

### To access the container

Under the app folder execute the following commands:

```bash
docker-compose exec api bash
docker-compose exec app bash
```
