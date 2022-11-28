const { checkBalanceQuery } = require('../../database/queries');

const getBalance = (req, res) => {
  checkBalanceQuery(req.params.id).then((result) => {
    res.json({ balance: result.rows[0].balance });
  }).catch((err) => res.json({ message: err }));
};

module.exports = getBalance;
