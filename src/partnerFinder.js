function PartnerFinder() {
  this.yourLatitude = null;
  this.yourLongitude = null;
  this.partners = [];
}

PartnerFinder.prototype.setYourCoordinates = function(coordinates) {
  var radianCoords = coordinates.map(function(coordinate) {
    coordinate * (Math.PI/2)
  });
  return radianCoords; 
}

PartnerFinder.prototype.getClosestPartner = function(range) {
  // walks the tree of json picks id and location
  // calls great circle theorem
  // compares distance to 100
  // 
}

module.exports.PartnerFinder = PartnerFinder;
