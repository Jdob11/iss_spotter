const { fetchMyIP, fetchMyCoordByIP } = require('./iss_promised');

fetchMyIP()
  .then(fetchMyCoordByIP)
  .then(body => console.log(body));