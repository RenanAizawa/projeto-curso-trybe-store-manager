const productsModel = require('../models/productsModel');
const validador = require('../middlewares/validadores');

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

const createdProduct = async (name) => {
  const resposta = validador.nameValidador(name);
  if (resposta.message) {
    return {
      message: resposta.message,
    };
  }
  const result = await productsModel.createdProduct(resposta);
  if (!result) {
    return null;
  }
  return result;
};

module.exports = {
  getAll,
  getById,
  createdProduct,
};