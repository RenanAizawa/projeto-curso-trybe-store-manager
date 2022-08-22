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

module.exports = {
  getAll,
};