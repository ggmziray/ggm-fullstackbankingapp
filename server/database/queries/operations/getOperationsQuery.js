const Pool = require('../../config/connection');

const getOperationsQuery = (id) => Pool.query({
  text: 'select * from operations where user_id = $1;',
  values: [id],
});

module.exports = getOperationsQuery;
