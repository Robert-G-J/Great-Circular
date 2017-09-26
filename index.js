var readline = require('readline');
var pF = require('./src/partnerFinder.js');
var pR = require('./src/partner.js');
var gC = require('./src/greatCircle.js');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var processUserInput = function() {
  rl.question("Enter range to search: ", (userInput) => {
   // ideally should validate input
    if(userInput) {
      rl.close();
      var partnerFinder = new pF.PartnerFinder();
      partnerFinder.setYourCoordinates([51.515419, -0.141099]);
      partnerFinder.getClosestPartner(userInput);
    }
   
  });
}

processUserInput();
