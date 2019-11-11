const bcrypt = require('bcryptjs');

const Crypt = function () {};

Crypt.hash = function (value, strength) {
  return new Promise(function (resolve, reject) {
    const callback = function (error, hash) {
      if (error) reject(error);
      else resolve(hash);
    };

    bcrypt.hash(value, strength || 10, callback);
  });
};

Crypt.compare = function (value, hash) {
  return new Promise(function (resolve, reject) {
    const callback = function (error, isEqual) {
      if (error) reject(error);
      else resolve(isEqual);
    };

    bcrypt.compare(value, hash, callback);
  });
};

module.exports = Crypt;
