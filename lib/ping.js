const request = require('request');

module.exports = function (HOST, API_KEY) {
  return function ping(cb) {
    request.get(`${HOST}/`,  (err, response, body) => {
      if (err) {
        cb(err);
        return;
      }
      if (response.statusCode >= 200 && response.statusCode < 300) {
        cb(null);
      } else {
        cb(new Error(JSON.parse(body).error.message));
      }
    })
    .auth(API_KEY, '')
  }
}