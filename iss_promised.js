const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchMyCoordByIP = function(body) {
  const ip = JSON.parse(body).ip; 
  return request(`http://ipwho.is/${ip}`);
};

const fetchISSFlyOverTimes = function (body) {
  const parsedBody = JSON.parse(body);
  const coords = {
    latitude: parsedBody.latitude,
    longitude: parsedBody.longitude
  };
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`);
}

module.exports = {
  fetchMyIP,
  fetchMyCoordByIP,
  fetchISSFlyOverTimes
}