const request = require("supertest");
const mongoose = require('mongoose');
const app = require("../index.js");

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /ping', () => {
  it('responds with pong', async () => {
    const response = await request(app).get('/ping');
    expect(response.status).toBe(200);
    expect(response.text).toBe('pong');
  });
});

describe('POST /api/sneakers', () => {
  it('responds with json', async () => {
    const sneakerData = {
      brand: "testBrand",
      model: "testModel",
      color: "testColor",
      price: 99,
      image: "https://static.vecteezy.com/system/resources/previews/006/426/627/original/shoes-sneaker-outline-drawing-sneakers-drawn-in-a-sketch-style-black-line-sneaker-trainers-template-outline-illustration-free-vector.jpg",
    };

    const response = await request(app)
      .post('/api/sneakers')
      .send(sneakerData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(201);
    expect(response.body).toEqual(expect.objectContaining({
      brand: "testBrand",
      model: "testModel",
      color: "testColor",
      price: 99,

    }));
  });

  it('responds with 400 if input is missing', async () => {
    const sneakerData = {
      model: "Air Max",
      color: "Black",
      price: 150,
    };

    const response = await request(app)
      .post('/api/sneakers')
      .send(sneakerData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(400);

  });
});







/* async function testPost(){
  const sneakerData = {
    brand: "Nike",
    model: "Air Max",
    color: "Black",
    price: 150,
  };
  
  const response = await request.post("/api/sneakers").send(sneakerData);
  expect(response.status).toBe(201);
}

testPost() */



/* describe("Integration Tests", () => {
  // False | Test cases for different scenarios

  describe("Create Sneaker", () => {
    it("should return 201 for successful sneaker creation", async () => {
      const sneakerData = {
        brand: "Nike",
        model: "Air Max",
        color: "Black",
        price: 150,
      };

      const response = await request.post("/api/sneakers").send(sneakerData);
      expect(response.status).toBe(201);
    });
  });


  // True | Positive Test Case
  describe("Get All Sneakers", () => {
    it("should return 200 and an array of sneakers", async () => {
      const response = await request.get("/api/sneakers");
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });
});*/