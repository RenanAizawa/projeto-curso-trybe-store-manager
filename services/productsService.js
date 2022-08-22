const productsModel = require('../models/productsModel');

const getAll = async () => {
  const result = await productsModel.getAllProducts;
  if (!result) {
    return {
      message: 'Product not found',
      status: 404,
    };
  }
  return {
    status: 200,
    result,
  };
};

const getById = async (id) => {
  const products = await productsModel.getAllProducts;
  const result = products.find((item) => item.id === id);
  return {
    status: 200,
    result,
  };
};

module.exports = {
  getAll,
  getById,
};