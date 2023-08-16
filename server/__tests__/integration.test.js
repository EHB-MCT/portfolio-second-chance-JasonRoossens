const app = require("../index.js");
const supertest = require("supertest");
const request = supertest(app);
const port = 2001;

describe("Integration Tests", () => {
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
});