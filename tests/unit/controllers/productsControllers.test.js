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
    it('testando allProducts', async () => {
      sinon.stub(productsService, 'getAll').resolves(fakeAll);
      const result = await productsService.getAll();

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.allProducts(req, res);

      expect(res.status.calledWith(200)).to.be.true
      expect(res.json.calledWith(fakeAll)).to.be.true

    });
    it('testando productsId', async () => {
      sinon.stub(productsService, 'getById').resolves(fakeId);
      const result = await productsService.getAll();

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.params = sinon.stub().returns(req);

      await productsController.productsId(req, res);

      expect(res.status.calledWith(200)).to.be.true
      expect(res.json.calledWith(fakeId)).to.be.true
    });
  });
  describe('testando a falha das chamadas', () => {
    it('testando o erro de allProducts', async () => {
      sinon.stub(productsService, 'getAll').resolves(null);
      const result = await productsService.getAll();

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.allProducts(req, res);

      expect(res.status.calledWith(404)).to.be.true
      expect(res.json.calledWith({ message: 'Product not found' })).to.be.true
    });
    it('testando o erro de productsId', async () => {
      sinon.stub(productsService, 'getById').resolves(null);
      const result = await productsService.getAll();

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.params = sinon.stub().returns(req);

      await productsController.productsId(req, res);

      expect(res.status.calledWith(404)).to.be.true
      expect(res.json.calledWith({ message: 'Product not found' })).to.be.true
    });
  });
});