const express = require('express');
const productsControler = require('../controllers/productsControler');

const productsRouter = express.Router();

productsRouter.get('/', productsControler.allProducts);
productsRouter.get('/:id', productsControler.productsId);
productsRouter.put('/', productsControler.productCreat);

module.exports = productsRouter;