const pool = require('../../config/connection');

const addUserQuery = (name, email, password) => pool.query({
  text: 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING * ;',
  values: [name, email, password],
});

module.exports = addUserQuery;
