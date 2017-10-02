var pG = require('../src/partnerGetter');

describe("The PartnerGetter", function() {
  
  beforeEach(function() {
    pG = new pG.PartnerGetter();
  });

  it("grabs json with a promise/xhr", function(done) {
    var url = "https://success.spidergap.com/partners.json";
    pG.getApiData(url)
      .then(function(ApiResponse) {
        console.log(ApiResponse);
        expect(ApiResponse).toBeTruthy();
        done();
      })
      .catch(function() {
        console.log("Promise Rejected");
      });
    
  }, 5000);
});
