var pF = require('../src/partnerFinder.js');
var pT  = require('../src/partner.js');

describe("Features", function() {

  it("Can find a location close to self", function() {
    var partnerFinder = new pF.PartnerFinder();
    var partner = new pT.Partner();
    partner.coordinates = "52.0629009,-1.3397750000000315";
    partner.organization = "Banbury";
    partnerFinder.setYourCoordinates([51.515419, -0.141099]);
    expect(partnerFinder.getClosestPartner(100)).not.toEqual("Banbury");
  });
});

