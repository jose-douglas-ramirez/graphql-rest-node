const {
	gql
} = require('apollo-server-hapi');

const typeDefs = gql`
  type Query {
    category(categoryID: Int): Category
    product(productID: Int): Product 
    order(orderID: Int): Order 
    products: [Product] 
    categories: [Category]
    orders: [Order]
    level1: [Level1]
    level2: [Level2]
  }

  type Category {
    categoryID: Int
    name: String
    description: String
  }

  type Product {
    productID: Int
    name: String
    supplierID: Int
    categoryID: Int
    unitPrice: Int
    unitsInStock: Int
    unitsOnOrder: Int
    reorderLevel: Int
    discontinued: Boolean
  }

  type Details {
    productID: Int,
    unitPrice: Int,
    quantity: Int,
    discount: Int,
    product: Product
  }

  type Order {
    customerID: String,
    employeeID: Int
    orderDate: String
    requiredDate: String
    shippedDate: String
    shipVia: Int
    freight: Int
    shipName: String
    details: Details
  }

  type Level1 {
    pk1_ID: Int,
    name: String,
    description: String,
  }

  type Level2 {
    pk1_ID: Int,
    level1_name: String,
    level1_description: String,
    pk2_ID: Int,
    fk1_ID: Int,
    name: String,
    description: String,
  }


`;

module.exports = typeDefs;