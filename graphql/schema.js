const {
	gql
} = require('apollo-server-hapi');

const typeDefs = gql`
  type Query {
    category(categoryID: Int): Category
    product(productID: Int): Product 
    order(orderID: Int): Order 
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
    discount: Int
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


`;

module.exports = typeDefs;