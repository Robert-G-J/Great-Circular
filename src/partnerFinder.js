function PartnerFinder() {
  this.yourLatitude = null;
  this.yourLongitude = null;
  this.partners = [];
}

PartnerFinder.prototype.convertToRadians = function(array) {
  var results = array.map(function(coordinate) {
    return ( coordinate * ( Math.PI/180 )  ); 
  });
  return results;
};

PartnerFinder.prototype.orthodromicDistance = function(lat1, long1, lat2, long2) {
  var meanEarthRadius = 6371000;
  return (meanEarthRadius*(Math.acos(Math.sin(lat1)* Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1))))/1000
}

PartnerFinder.prototype.setYourCoordinates = function(coordinates) {
  var results  = coordinates.map(function(coordinate) {
    return (coordinate * (Math.PI/180));
  });
  return results; 
}

PartnerFinder.prototype.getClosestPartner = function(range) {
  // walks the tree of json picks id and location
  // calls json with promise
  function getPartners(obj) {
    return obj.offices[0].coordinates !== "";
  }
  var livePartners = this.partners.filter(getPartners);
  // calls great circle theorem
  // compares distance to 100
  // 
}

module.exports.PartnerFinder = PartnerFinder;
