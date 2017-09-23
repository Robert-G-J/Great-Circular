var pF = require('../src/partnerFinder.js');

describe("The ParterFinder", function() {

  it("sets your coordinates", function() {
    var partnerFinder = new pF.PartnerFinder();
    var coordinates = [51.515419, -0.141099];
    var expected  = [0.899113677092, -0.0024626421213]
    var result = partnerFinder.setYourCoordinates(coordinates);
    result.every((x, i) => expect(x).toBeCloseTo(expected[i])); 
  });

  it("gets your closest partner", function() {
    //test for getting banbury
  });
});
