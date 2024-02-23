const { nextISSTimesForMyLocation } = require('./iss_promised');

const formatFlyOverTimes = function(flyOverTimes) {
  for (const time of flyOverTimes) {
    let date = new Date(time.risetime * 1000);
    date = date.toString();
    const seconds = time.duration;
    console.log(`The ISS will next fly over your location on ${date} for a total of ${seconds} seconds.`);
  }
};

nextISSTimesForMyLocation()
  .then((flyOverTimes) => {
    formatFlyOverTimes(flyOverTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
