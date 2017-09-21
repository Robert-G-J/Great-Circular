function GreatCircle() {
}

GreatCircle.prototype.convertToRadians = function(array) {
  var results = array.map(function(coordinate) {
    return ( coordinate * ( Math.PI/180 )  ); 
  });
  return results;
};

module.exports.GreatCircle = GreatCircle;
