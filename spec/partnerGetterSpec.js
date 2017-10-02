var pG = require('../src/partnerGetter');

describe("The PartnerGetter", function() {
  
  beforeEach(function() {
    pG = new pG.PartnerGetter();
  });

  it("grabs json with a promise/xhr", function(done) {
    var url = "https://success.spidergap.com/partners.json?inf_contact_key=cf2a36d229a68d60f3e4465509bb2f6b93834f17d63cdd50d4181d0ad402a43f";
    pG.getApiData(url).then(function(ApiResponse) {
      console.log(ApiResponse);
      expect(ApiResponse).toBeTruthy();
      done();
    })
    
  }, 10000);
});
