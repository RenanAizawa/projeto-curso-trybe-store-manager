const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?',
    [id]);
  return result;
};

const createdProduct = async (name) => {
  const [result] = await connection.execute('INSERT INTO StoreManager.products (name) VALUES (?)',
    [name]);
  return {
    message: 'Produto criado com sucesso',
    product: {
      id: result.id,
      name,
    },
  };
};

module.exports = {
  getAllProducts,
  getProductById,
  createdProduct,
};