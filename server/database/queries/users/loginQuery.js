const Pool = require('../../config/connection');

const signInUserQuery = (id) => Pool.query({
  text: 'select * from users where id = $1',
  values: [id],
});

module.exports = signInUserQuery;
