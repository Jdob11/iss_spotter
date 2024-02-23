const { fetchMyIP, fetchMyCoordByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    return console.log('It didn\'t work!', error);
  }
  console.log(flyOverTimes);
});