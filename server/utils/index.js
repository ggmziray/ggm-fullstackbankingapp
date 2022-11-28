const hashPassword = require('./hashPassword');
const comparePasswords = require('./comparePassword');
const sendTokens = require('./jwtSign');
const verifyToken = require('./jwtVerify');
const getDecoded = require('./getDecoded');

module.exports = {
  hashPassword,
  comparePasswords,
  sendTokens,
  verifyToken,
  getDecoded,
};
