function PartnerGetter () {
}

PartnerGetter.prototype.getApiData = function(url) {
  return new Promise(function(resolve, reject) {
    var req  = new XMLHttpRequest();
    req.open('GET', url, true);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function() {
      reject(Error("Network Error"));
    };

    req.send();
  });
  
};

module.exports.PartnerGetter = PartnerGetter;
