var gC = require('../src/greatCircle.js');

describe("Great Circle", function() {
  
  beforeEach(function() {
    gc = new gC.GreatCircle();
    latBanbury = 52.0629009;
    lonBanbury = -1.3397750000000315;
  });
  
  it("converts degrees to radians", function() {
   //var lat = 52.0629009;
   //var lon = -1.3397750000000315;  
   var expected =  [0.9086690388423, -0.023383484985849571636];
   var radianArray = gc.convertToRadians([latBanbury, lonBanbury]);
   radianArray.every((x, i) => expect(x).toBeCloseTo(expected[i]));
  });
  
  it("calculates the orthodromic distance", function() {
    var latLondon = 51.515419;
    var lonLondon = -0.141099;
    var radsLondon = gc.convertToRadians([latLondon, lonLondon]);
    var radsBanbury = gc.convertToRadians([latBanbury, lonBanbury]);
    var result = gc.orthodromicDistance(radsLondon[0], radsLondon[1], radsBanbury[0], radsBanbury[1]);
    expect(result).toBeCloseTo(102.48330298105786);
  });

})


