const request = require("request");

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error,response,body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  }
  );
};

const fetchMyCoordByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error,response,body) => {

    if (error) {
      callback(error, null);
      return;
    }
    const bodyParsed = JSON.parse(body);

    if (!bodyParsed.success) {
      const msg = `Success status: ${body.success}. Server message: ${body.message} when looking for IP ${body.ip}`;
      callback(Error(msg), null);
      return;
    }
    const coords = {
      latitude: bodyParsed.latitude,
      longitude: bodyParsed.longitude
    };

    callback(null, coords);
  }
  );
};

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching fly over times. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const flyOverTimes = JSON.parse(body).response;
    callback(null, flyOverTimes);
  });
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchMyCoordByIP(ip, (error, coords) => {
      if (error) {
        return callback(error, null);
      }
      

      fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
        if (error) {
          return callback(error, null);
        }
        

        callback(null, flyOverTimes);
      });
    });
  });
};

module.exports = { nextISSTimesForMyLocation };