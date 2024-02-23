const request = require("request");

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error,response,body) => {
    if (error) {
      callback(error, null);
      return;
    }
    body = JSON.parse(body);
    const ip = body.ip;
    callback(null, ip);
  }
  );
};

module.exports = { fetchMyIP };