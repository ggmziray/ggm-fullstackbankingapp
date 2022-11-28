const jwt = require('jsonwebtoken');
require('env2')('.env');

const getDecoded = (req, res, next) => {
  if (req.cookies.access) {
    jwt.verify(req.cookies.access, process.env.JWT_SECRET, (err, decoded) => {
      if (err) res.status(401).json({ message: 'Unauthorized' });
      else res.status(200).json(decoded)
    });
  } else res.status(401).json({ message: 'Unauthorized' });
};

module.exports = getDecoded;