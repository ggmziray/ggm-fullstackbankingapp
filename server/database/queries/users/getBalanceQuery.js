const pool = require('../../config/connection');

const checkBalanceQuery = (id) => pool.query({
  text: 'SELECT balance FROM users WHERE id = $1;',
  values: [id],
});

module.exports = checkBalanceQuery;
