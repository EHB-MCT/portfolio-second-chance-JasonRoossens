# My Ultimate Sneaker Collection

My Ultimate Sneaker Collection is a webapp where you can keep track off you sneaker collection. Simply add you sneakers with the form. (if you want to add an image to your sneaker you need to get a link of an image online. for example: https://image.jpg)

## Installation

1. Install [Docker](https://docs.docker.com/engine/install/) or [Docker Desktop](https://docs.docker.com/desktop/)
2. Install [Docker Compose](https://docs.docker.com/compose/install/)
3. Download this folder as a .zip file.
4. Rename `TEMPLATE.env` to `.env` within the `server` directory. Fill in `PORT` and `DB_URI` values.
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
## Routes
### Backend

- GET
All sneakers
```
http://localhost:7001/api/sneakers
```

- GET
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

## Testing

```
cd server
```
```
npm test
```

## Used technologies

- Client: React
- Server: Node, Express, MongoDB

## Used dependencies

 ### Server
- body-parser
- cors
- dotenv
- express
- mongodb
- mongoose
- nodemon
 ### Server (testing) 
- jest
- supertest

 ### client
- @testing-library/react
- @testing-library/user-event
- react
- react-dom
- react-router-dom
- react-scripts
- web-vitals

## Contributing

Pull requests are welcome. For major changes, please open an issue to discuss the changes you'd like to make.
## licence
  This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)