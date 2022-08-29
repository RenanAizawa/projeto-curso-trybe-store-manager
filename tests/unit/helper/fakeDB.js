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

const products1 = [
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
  },
  {
    id: 4,
    name: 'aveia'
  }
]


const sales = [
  {
    id: 1,
    date: Date.now()
  },
  {
    id: 2,
    date: Date.now()
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
  products1,
  sales,
  sales_products
}