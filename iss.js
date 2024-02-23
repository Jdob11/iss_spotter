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
      const msg = `Success status: ${bodyParsed.success}. Server message: ${bodyParsed.message} when looking for IP ${bodyParsed.ip}`;
      callback(Error(msg), null);
      return;
    }
    
    const { latitude, longitude } = bodyParsed;

    callback(null, {latitude, longitude});
  }
  );
};

module.exports = { fetchMyIP,
                   fetchMyCoordByIP,
                   };