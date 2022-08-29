const sinon = require('sinon');
const { expect } = require('chai');
const { products } = require('../helper/fakeDB');
const productsService = require('../../../services/productsService');
const productsController = require('../../../controllers/productsControler');

describe('Testando Controller products', () => {
  beforeEach(sinon.restore)
  const fakeAll = products;
  const fakeId = products[0];
  describe('testando o sucesso das chamadas', () => {
    it('testando allProducts', async () => { });
    it('testando productsId', async () => {});
  });
  describe('testando a falha das chamadas', () => {
    it('testando o erro de allProducts', async () => { });
    it('testando o erro de productsId', async () => { });
  });
});