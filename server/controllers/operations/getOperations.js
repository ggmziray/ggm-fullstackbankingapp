const { getOperationsQuery } = require('../../database/queries/index');

const viewAllOperations = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await getOperationsQuery(id);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = viewAllOperations;
