const productsModel = require('../models/productsModel');

const getAll = async () => {
  const result = await productsModel.getAllProducts();
  if (!result) {
    return null;
  }
  return result;
};

const getById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) {
    return null;
  }
  return product;
};

const createdProduct = (name) => {
  
};

module.exports = {
  getAll,
  getById,
  createdProduct,
};