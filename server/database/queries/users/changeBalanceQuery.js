const pool = require('../../config/connection');

const changeBalanceQuery = (id, amount) => pool.query({
  text: 'UPDATE users SET balance = balance + ($2) WHERE id = ($1);',
  values: [id, amount],
});
module.exports = changeBalanceQuery;