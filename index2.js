const { fetchMyIP, fetchMyCoordByIP, fetchISSFlyOverTimes } = require('./iss_promised');

fetchMyIP()
  .then(fetchMyCoordByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));