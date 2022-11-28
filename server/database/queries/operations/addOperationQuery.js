const Pool = require('../../config/connection');

const addOperationQuery = (amount, userId) => Pool.query({
  text: 'insert into operations (amount, user_id) values ($1, $2) returning *;',
  values: [amount, userId],
});

module.exports = addOperationQuery;
