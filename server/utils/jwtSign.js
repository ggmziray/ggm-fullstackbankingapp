const jwt = require('jsonwebtoken');
require('env2')('.env');

const createAccessToken = (user) => jwt.sign(user, process.env.JWT_SECRET);

const sendAccessToken = (res, token, user) => {
  res.cookie('access', token, {
    expires: new Date(Date.now() + 60 * 60 * 1000),
    secure: process.env.NODE_ENV === 'production',
  });
  res.json({ user });
};

const sendTokens = async (res, user) => {
  const accessToken = await createAccessToken(user);
  sendAccessToken(res, accessToken, user);
};

module.exports = sendTokens;
