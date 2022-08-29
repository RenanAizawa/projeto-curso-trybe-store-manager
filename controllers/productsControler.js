const productsService = require('../services/productsService');

const allProducts = async (req, res) => {
  try {
    const data = await productsService.getAll();
    if (data === null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(data);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};

const productsId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await productsService.getById(id);
    if (data === null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(data);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};

module.exports = {
  allProducts,
  productsId,
};