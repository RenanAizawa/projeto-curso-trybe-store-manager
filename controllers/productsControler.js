const productsService = require('../services/productsService');

const allProducts = async (req, res) => {
  try {
    const data = await productsService.getAll;
    if (data === null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(data);
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