function PartnerFinder() {
  this.yourLatitude = null;
  this.yourLongitude = null;
  this.partners = [];
}

PartnerFinder.prototype.setYourCoordinates = function(coordinates) {
  var results  = coordinates.map(function(coordinate) {
    return (coordinate * (Math.PI/180));
  });
  return results; 
}

PartnerFinder.prototype.getClosestPartner = function(range) {
  // walks the tree of json picks id and location
  // calls great circle theorem
  // compares distance to 100
  // 
}

module.exports.PartnerFinder = PartnerFinder;
