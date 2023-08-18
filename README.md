# My Ultimate Sneaker Collection
## Installation

1. Install [Docker](https://docs.docker.com/engine/install/) or [Docker Desktop](https://docs.docker.com/desktop/)
2. Install [Docker Compose](https://docs.docker.com/compose/install/)
3. Download this folder as a .zip file.
4. Remove TEMPLATE from TEMPLATE.env to create the .env file inside the server directory.
5. Run the following commands inside this folder:

```bash
cd server
npm install
cd -

cd client
npm install

docker-compose build
docker-compose up
```
## routes
### Backend

- GET
All sneakers
```
http://localhost:7001/api/sneakers
```

Sneaker by id
```
http://localhost:7001/api/sneakers/{id}
```

- POST
Create sneaker
```
http://localhost:7001/api/sneakers
```

- PUT
Update sneaker by id
```
http://localhost:7001/api/sneakers/{id}
```

- DELETE
Delete sneaker by id
```
http://localhost:7001/api/sneakers/{id}
```
### Frontend

My Ultimate Sneaker Collection
```
http://localhost:3000
```
## Used services

- Client: React
- Server: Node, Express, MongoDB

## Used dependencies

- ## Server
- body-parser
- cors
- dotenv
- express
- mongodb
- mongoose
- nodemon
- ## Server (testing) 
- jest
- supertest

- ## client
- @testing-library/react
- @testing-library/user-event
- react
- react-dom
- react-router-dom
- react-scripts
- web-vitals




