const sinon = require('sinon');
const { expect } = require('chai');
const { products } = require('../helper/fakeDB');
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');
const validador = require('../../../middlewares/validadores');
const strings = require('../../../middlewares/stringsToUse');

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
      sinon.stub(productsModel, 'getAllProducts').resolves();
      const result = await productsService.getAll();

      expect(result).to.be.eq(null);
    });
    it('testar o retorno de getById', async () => {
      sinon.stub(productsModel, 'getProductById').resolves();
      const result = await productsService.getById(1);

      expect(result).to.be.eq(null);
    });
  })
  describe('Testando o retorno em caso de sucesso de criação de novo produto', () => {
    it('testando retorno do createdProduct', async () => {
      const name = 'hortelã';
      const obg = {
        product: {
          id: 1,
          name,
        },
      };
      sinon.stub(validador, 'nameValidador').returns(name);
      sinon.stub(productsModel, 'createdProduct').resolves(obg);
      const resultado = await productsService.createdProduct(name)
      expect(resultado).to.be.deep.eq(obg);
    });
  });
  describe('Testando o retorno em caso o campo nome seja invalido', () => {
    it('name é undifined', async () => {
      const obj = {
        code: 400,
        message: strings.STRING_EMPTY
      }
      const name = '';
      sinon.stub(validador, 'nameValidador').returns(obj);
      const result = await productsService.createdProduct(name)

      expect(result).to.be.deep.eq(obj);
      expect(result).to.have.all.keys('code', 'message')
    })
    it('name tem que ter no minimo 5 caracteres', async () => {
      const obj = {
        code: 422,
        message: strings.STRING_MIN
      }
      const name = "1234";
      sinon.stub(validador, 'nameValidador').returns(obj);
      const result = await productsService.createdProduct(name)

      expect(result).to.be.deep.eq(obj);
      expect(result).to.have.all.keys('code', 'message')
    })
  })
});