const { addOperationQuery, changeBalanceQuery } = require('../../database/queries');

const addOperation = async (req, res) => {
  const { amount } = req.body;
  const { id } = req.params;

  try {
    await changeBalanceQuery(id, amount);
    const { rows } = await addOperationQuery(amount, id);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = addOperation;
