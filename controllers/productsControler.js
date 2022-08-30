const productsService = require('../services/productsService');

const allProducts = async (req, res) => {
  try {
    const data = await productsService.getAll();
    if (data === null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(data);
  } catch (_e) {
    return res.status(500).json({ message: 'Erro na aplicação' });
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
  } catch (_e) {
    return res.status(500).json({ message: 'Erro na aplicação' });
  }
};

const productCreat = async (req, res) => {
  try {
    const { name } = req.body;
    const { message, product } = await productsService.createdProduct(name);
    if (!product) {
      return res.status(404).json({ message });
    }
    return res.status(201).json({ id: product.id, name, message });
  } catch (_e) {
    return res.status(500).json({ message: 'Erro na aplicação' });
  }
};

module.exports = {
  allProducts,
  productsId,
  productCreat,
};