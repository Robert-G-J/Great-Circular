var pF = require('../src/partnerFinder.js');
var pT  = require('../src/partner.js');

describe("Features: ", function() {

  it("can find a partner given a range", function() {
    var partnerFinder = new pF.PartnerFinder();
    var partner = {
      organization: "Blue Square 360",
      offices: [
            {
              location: "Singapore",
              address: "Ocean Financial Centre, Level 40, 10 Collyer Quay, Singapore, 049315",
              coordinates: "1.28304,103.85199319999992"
            },
            {
              location: "London, UK",
              address: "St Saviours Wharf, London SE1 2BE",
              coordinates: "51.5014767,-0.0713608999999451"
            }
      ]
    }
    partnerFinder.partners.push(partner);
    partnerFinder.setYourCoordinates([51.515419, -0.141099]);
    var closestPartners = partnerFinder.getClosestPartner(100)
    expect(closestPartners).toEqual([partner]);
  });
});

