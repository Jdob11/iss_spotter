const { nextISSTimesForMyLocation } = require('./iss_promised');
const { formatFlyOverTimes } = require('./index')

nextISSTimesForMyLocation()
  .then((flyOverTimes) => {
    formatFlyOverTimes(flyOverTimes);
  })
