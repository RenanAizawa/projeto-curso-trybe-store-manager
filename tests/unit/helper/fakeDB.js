const products = [
  {
    id: 1,
    name: 'Martelo de Thor'
  },
  {
    id: 2,
    name: 'Traje de encolhimento'
  },
  {
    id: 3,
    name: 'Escudo do Capitão América'
  }
]

const sales = [
  {
    id: 1,
    date: NOW()
  },
  {
    id: 2,
    date: NOW()
  }
]

const sales_products = [
  {
    sales_id: 1,
    product_id: 1,
    quantity: 5
  },
  {
    sales_id: 1,
    product_id: 2,
    quantity: 10
  },
  {
    sales_id: 2,
    product_id: 3,
    quantity: 15
  }
]

module.exports = {
  products,
  sales,
  sales_products
}