const connection = require('./connection');

const createSale = async (sell) => {
  if (sell) {
    const [result] = await connection.execute('INSERT INTO StoreManager.sales (date) VALUES (?)',
     [Date.now()]);
    return result;
  }
};

const newSale = async (sell) => {
  const newSell = createSale(sell);
  console.log(newSell);
};

module.exports = {
  newSale,
};