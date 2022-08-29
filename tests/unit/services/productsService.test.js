const sinon = require('sinon');
const { expect } = require('chai');
const { products } = require('../helper/fakeDB');
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService')

describe('Testando Service products', () => {
  beforeEach(sinon.restore)
  const fakeAll = products;
  const fakeId = products[0];
  describe('Testa a execução correta das funções all e findById', () => {
    it('testar o recebimento correto de getAll', async () => {
      sinon.stub(productsModel, 'getAllProducts').resolves(fakeAll);
      const result = await productsService.getAll();

      expect(result).to.be.eq(fakeAll);
    });
    it('testar o recebimento correto de getById', async () => {
      sinon.stub(productsModel, 'getProductById').resolves(fakeId);
      const result = await productsService.getById(1);

      expect(result).to.be.eq(fakeId);
    });
  });
  describe('Testa o retorno correto caso haja erro', () => {
    it('testar retorno de getAll', async () => {
      sinon.stub(productsModel, 'getAllProducts').resolves({});
      const result = await productsService.getAll();

      expect(result).to.be.eq(null);
    });
    it('testar o retorno de getById', async () => {
      sinon.stub(productsModel, 'getProductById').resolves({});
      const result = await productsService.getById(1);

      expect(result).to.be.eq(null);
    });
  })
});