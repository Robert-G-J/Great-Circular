function PartnerFinder() {
  this.yourLatitude = null;
  this.yourLongitude = null;
  this.partners = [];
}

PartnerFinder.prototype._convertToRadians = function(array) {
  var results = array.map(function(coordinate) {
    return ( coordinate * ( Math.PI/180 )  ); 
  });
  return results;
};

PartnerFinder.prototype._orthodromicDistance = function(lat1, long1, lat2, long2) {
  var meanEarthRadius = 6371000;
  return (meanEarthRadius*(Math.acos(Math.sin(lat1)* Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1))))/1000
}

PartnerFinder.prototype.setYourCoordinates = function(coordinates) {
  var results  = coordinates.map(function(coordinate) {
    return (coordinate * (Math.PI/180));
  });
  this.yourLatitude = results[0];
  this.yourLongitude = results[1];
  return results; 
}

PartnerFinder.prototype.getClosestPartner = function(range) {
  var thisPF = this; 
  
  return this.partners.filter(function(partner) {
    return partner.offices.filter(function(office) {
      var degreeCoordsAsStrings = office.coordinates;
      var degreeCoordsAsFloats = degreeCoordsAsStrings.split(/,/).map(parseFloat);
      var radianCoords = thisPF._convertToRadians(degreeCoordsAsFloats);
      var distanceToOffice = thisPF._orthodromicDistance(thisPF.yourLatitude, thisPF.yourLongitude, radianCoords[0], radianCoords[1]); 
      if (distanceToOffice <= range)
        return partner;
    });
  });
}

module.exports.PartnerFinder = PartnerFinder;
