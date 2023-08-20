const {validateBodyInputs} = require("../controllers/sneakerController");

describe('validateBodyInputs', function() {
    it('failed when brand is missing', function(done) {
        expect(validateBodyInputs({})).toStrictEqual(["brand"])
        done()
    });
});