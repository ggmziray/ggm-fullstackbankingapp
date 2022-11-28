const jwt = require('jsonwebtoken');
require('env2')('.env');

const verifyToken = (req, res, next) => {
  if (req.cookies.access) {
    jwt.verify(req.cookies.access, process.env.JWT_SECRET, (err, decoded) => {
      if (err) res.status(401).json({ message: 'Unauthorized' });
      else next();
    });
  } else res.status(401).json({ message: 'Unauthorized' });
};

module.exports = verifyToken;
