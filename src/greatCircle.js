function GreatCircle() {
}

GreatCircle.prototype.convertToRadians = function(array) {
  var results = array.map(function(coordinate) {
    return ( coordinate * ( Math.PI/180 )  ); 
  });
  return results;
};

GreatCircle.prototype.orthodromicDistance = function(lat1, long1, lat2, long2) {
  var meanEarthRadius = 6371000;
  return (meanEarthRadius*(Math.acos(Math.sin(lat1)* Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1))))/1000
}

module.exports.GreatCircle = GreatCircle;
