const pool = require('../../config/connection');

const checkUserQuery = (email) => pool.query({
  text: 'SELECT * FROM users WHERE email = $1;',
  values: [email],
});

module.exports = checkUserQuery;
