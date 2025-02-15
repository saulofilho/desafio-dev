# File Parser System

The File Parser System is a web-based application designed to efficiently process and extract structured data from .txt file. 

Built with Ruby on the backend and React on the frontend, this system provides a seamless and intuitive interface for users to upload, parse, and analyze files.

## Local development environment

Use `docker` and `docker compose` for development environment.

### Building and starting the container

Under the app folder execute the following commands:

```bash
docker compose up --build -d
```

### To access the container

Under the app folder execute the following commands:

```bash
# backend
docker-compose exec api bash

# frontend
docker-compose exec app bash
```

### To access the code

```bash
# backend
cd api

# frontend
cd app
```
