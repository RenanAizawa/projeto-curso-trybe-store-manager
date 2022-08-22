const productsService = require('../services/productsService');

const allProducts = async (req, res) => {
  const { status, result, message } = await productsService.getAll;
  try {
    if (status === 404) {
      return res.status(status).json({ message });
    }
    return res.status(status).json(result);
  } catch (e) {
    console.log(e);
  }
};

const productsId = async (req, res) => {
  const { id } = req.params;
  const { status, result } = await productsService.getById(id);
  return res.status(status).json(result);
};

module.exports = {
  allProducts,
  productsId,
};