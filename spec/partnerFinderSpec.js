var pF = require('../src/partnerFinder.js');

describe("The ParterFinder", function() {
  
  beforeEach(function() {
    pf = new pF.PartnerFinder();
    latBanbury = 52.0629009;
    lonBanbury = -1.3397750000000315;
  });

  it("converts degrees to radians", function() {
    //var lat = 52.0629009;
    //var lon = -1.3397750000000315;  
    var expected =  [0.9086690388423, -0.023383484985849571636];
    var radianArray = pf.convertToRadians([latBanbury, lonBanbury]);
    radianArray.every((x, i) => expect(x).toBeCloseTo(expected[i]));
  });

  it("calculates the orthodromic distance", function() {
    var latLondon = 51.515419;
    var lonLondon = -0.141099;
    var radsLondon = pf.convertToRadians([latLondon, lonLondon]);
    var radsBanbury = pf.convertToRadians([latBanbury, lonBanbury]);
    var result = pf.orthodromicDistance(radsLondon[0], radsLondon[1], radsBanbury[0], radsBanbury[1]);
    expect(result).toBeCloseTo(102.48330298105786);
  });

  it("sets your coordinates", function() {
    var coordinates = [51.515419, -0.141099];
    var expected  = [0.899113677092, -0.0024626421213]
    var result = pf.setYourCoordinates(coordinates);
    result.every((x, i) => expect(x).toBeCloseTo(expected[i])); 
  });

  it("gets your closest partner", function() {
    var partner0 = {
      name: "Banbury",
      coordinates: "52.0629009,-1.3397750000000315"
    }
    var partner1 = {
      name: "Mexico City",
      coordinates: "19.4361004,-99.18870959999998"
    }
    pf.partners.push(partner0);
    pf.partners.push(partner1);
    expect(pf.getClosestPartner(100)).toEqual([partner]);
  });
});
