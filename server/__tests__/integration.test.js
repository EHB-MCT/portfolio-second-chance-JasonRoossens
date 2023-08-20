const request = require("supertest");

const app = require("../index.js");

beforeAll(done => {
  done()
})

afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close()
  done()
})

describe('GET /ping', function() {
  it('responds with pong', function(done) {
    request(app)
      .get('/ping')
      .expect(200, "pong", done);
  });
});

describe('POST /api/sneakers', function() {
  it('responds with json', function(done) {
    const sneakerData = {
      brand: "Nike",
      model: "Air Max",
      color: "Black",
      price: 150,
    };
    request(app)
      .post('/api/sneakers')
      .send(sneakerData)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
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