const { fetchMyIP, fetchMyCoordByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchMyCoordByIP('149.115.34.26', (error, coordinates) => {
//   if (error) {
//     console.log('It didn\'t work:', error.message);
//     return;
//   }

//   console.log('It worked! Coordinates are:', coordinates);
// });

// fetchISSFlyOverTimes('149.115.34.26', (error, flyOverTimes) => {
//   if (error) {
//     console.log('It didn\'t work:', error.message);
//     return;
//   }
  
//   console.log('It worked! Pass times are:', flyOverTimes);
// });