const sinon = require('sinon');
const { expect } = require('chai');
const { products, products1 } = require('../helper/fakeDB');
const productsModel = require('../../../models/productsModel');
const connection = require('../../../models/connection');

describe('Teste Model products', () => {
  beforeEach(sinon.restore)
  describe('Consulta de produtos', () => {
    const fakeAll = products;
    const fakeAll1 = products1;
    const fakeId = products[0]
    it('Consulta todos os produtos', async () => {
      sinon.stub(connection, 'execute').resolves([fakeAll]);
      const allFind = await productsModel.getAllProducts()
      
      expect(allFind).to.be.eq(fakeAll);
    });
    it('Consulta um produto por id', async () => {
      sinon.stub(connection, 'execute').resolves([[fakeId]]);
      const findId = await productsModel.getProductById(1);

      expect(findId).to.be.eq(fakeId);
    });
  });
  describe('Criação de produtos', () => {
    it('criar o produto aveia', async () => {
      sinon.stub(connection, 'execute').resolves();
    });
  })
});