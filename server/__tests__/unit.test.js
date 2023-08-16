const submit = require("../index");

// Test 1 is true | Everything inputs is filled
const sneakerTest = {
      brand: "Nike",
      model: "Dunk low",
      color: "red",
      price: 120
};

// Test 2 is false | brand cannot be empty
const sneakerTest2 = {
    brand: "",
    model: "Dunk low",
    color: "red",
    price: 120
};

// Test 3 is false | model cannot be empty
const sneakerTest3 = {
    brand: "Nike",
    model: "",
    color: "red",
    price: 120
};

// Test 4 is false | color cannot be empty
const sneakerTest4 = {
    brand: "Nike",
    model: "Dunk low",
    color: "",
    price: 120
};

// Test 5 is false | price cannot be empty
const exerciseTest5 = {
    brand: "Nike",
    model: "Dunk low",
    color: "red",
    price: ""
};

// Test 5 is false | price cannot be negative
const exerciseTest6 = {
    brand: "Nike",
    model: "Dunk low",
    color: "red",
    price: -2
};




describe("Unit Tests", () => {
  it("checks Sneaker Submit with Valid Data", () => {
    expect(submit.sneakerPOST(sneakerTest)).toBeTruthy(); // True due Everything inputs is filled and exercise id exist
  });

  it("check Sneaker Submit with Invalid Data", () => {
    expect(submit.sneakerPOST(sneakerTest2)).toBeFalsy(); // False because brand is empty
  });

  it("check Sneaker Submit with Invalid Data", () => {
    expect(submit.sneakerPOST(sneakerTest3)).toBeFalsy(); // False because model is empty
  });

  it("check Sneaker Submit with Invalid Data", () => {
    expect(submit.sneakerPOST(sneakerTest4)).toBeFalsy(); // False because color is empty
  });

  it("check Sneaker Submit with Invalid Data", () => {
    expect(submit.sneakerPOST(sneakerTest5)).toBeFalsy(); // False because price is empty
  });
  it("check Sneaker Submit with Invalid Data", () => {
    expect(submit.sneakerPOST(sneakerTest6)).toBeFalsy(); // False because price is negative
  });

});