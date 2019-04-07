var crypto = require('crypto');

const saltLength = 8;

// generates a random hex string to use as salt
var generateSalt = function(){
  var salt = crypto.randomBytes(saltLength).toString('hex');
  return salt;
}

// hashes the given password with the given string
var hashPassword = function(password, salt){
  var hash = crypto.createHmac('sha256', salt).update(password).digest('hex');
  return hash;
}

console.log(hashPassword("passw0rd", "0feb642d830a7f14"));

module.exports.generateSalt = generateSalt;
module.exports.hashPassword = hashPassword;
