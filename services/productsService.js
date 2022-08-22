const productsModel = require('../models/productsModel');

const getAll = async () => {
  const result = await productsModel.getAllProducts;
  if (!result) {
    return null;
  }
  return result;
};

const getById = async (id) => {
  const products = await productsModel.getAllProducts;
  const result = products.find((item) => item.id === id);
  return result;
};

module.exports = {
  getAll,
  getById,
};