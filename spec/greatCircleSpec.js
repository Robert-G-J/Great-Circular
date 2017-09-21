var gC = require('../src/greatCircle.js');

describe("Great Circle", function() {
  
  beforeEach(function() {
    gc = new gC.GreatCircle();
  });
  
  it("converts degrees to radians", function() {
   var lat = 52.0629009;
   var lon = -1.3397750000000315;  
   var expected =  [0.9086690388423, -0.023383484985849571636];
   var radianArray = gc.convertToRadians([lat, lon]);
   radianArray.every((x, i) => expect(x).toBeCloseTo(expected[i]));
  });
  
  it("calculates the great spherical distance", function() {
  });

})


