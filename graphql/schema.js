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
    level3: [Level3]
    level4: [Level4]
    level5: [Level5]
    level6: [Level6]
    level7: [Level7]
    level8: [Level8]
    level9: [Level9]
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
    description: String
  }

  type Level2 {
    pk1_ID: Int,
    level1_name: String,
    level1_description: String,
    pk2_ID: Int,
    fk1_ID: Int,
    name: String,
    description: String
  }

  type Level3 {
    pk1_ID: Int,
    level1_name: String,
    level1_description: String,
    pk2_ID: Int,
    fk1_ID: Int,
    level2_name: String,
    level2_description: String,
    pk3_ID: Int,
    fk2_ID: Int,
    name: String,
    description: String
  }

  type Level4 {
    pk1_ID: Int,
    level1_name: String,
    level1_description: String,
    pk2_ID: Int,
    fk1_ID: Int,
    level2_name: String,
    level2_description: String,
    pk3_ID: Int,
    fk2_ID: Int,
    level3_name: String,
    level3_description: String
    pk4_ID: Int,
    fk3_ID: Int,
    name: String,
    description: String
  }

  type Level5 {
    pk1_ID: Int,
    level1_name: String,
    level1_description: String,
    pk2_ID: Int,
    fk1_ID: Int,
    level2_name: String,
    level2_description: String,
    pk3_ID: Int,
    fk2_ID: Int,
    level3_name: String,
    level3_description: String
    pk4_ID: Int,
    fk3_ID: Int,
    level4_name: String,
    level4_description: String,
    pk5_ID: Int,
    fk4_ID: Int,
    name: String,
    description: String
  }

  type Level6 {
    pk1_ID: Int,
    level1_name: String,
    level1_description: String,
    pk2_ID: Int,
    fk1_ID: Int,
    level2_name: String,
    level2_description: String,
    pk3_ID: Int,
    fk2_ID: Int,
    level3_name: String,
    level3_description: String
    pk4_ID: Int,
    fk3_ID: Int,
    level4_name: String,
    level4_description: String,
    pk5_ID: Int,
    fk4_ID: Int,
    level5_name: String,
    level5_description: String,
    pk6_ID: Int,
    fk5_ID: Int,
    name: String,
    description: String
  }

  type Level7 {
    pk1_ID: Int,
    level1_name: String,
    level1_description: String,
    pk2_ID: Int,
    fk1_ID: Int,
    level2_name: String,
    level2_description: String,
    pk3_ID: Int,
    fk2_ID: Int,
    level3_name: String,
    level3_description: String
    pk4_ID: Int,
    fk3_ID: Int,
    level4_name: String,
    level4_description: String,
    pk5_ID: Int,
    fk4_ID: Int,
    level5_name: String,
    level5_description: String
    pk6_ID: Int,
    fk5_ID: Int,
    level6_name: String,
    level6_description: String,
    pk7_ID: Int,
    fk6_ID: Int,
    name: String,
    description: String
  }

  type Level8 {
    pk1_ID: Int,
    level1_name: String,
    level1_description: String,
    pk2_ID: Int,
    fk1_ID: Int,
    level2_name: String,
    level2_description: String,
    pk3_ID: Int,
    fk2_ID: Int,
    level3_name: String,
    level3_description: String
    pk4_ID: Int,
    fk3_ID: Int,
    level4_name: String,
    level4_description: String,
    pk5_ID: Int,
    fk4_ID: Int,
    level5_name: String,
    level5_description: String
    pk6_ID: Int,
    fk5_ID: Int,
    level6_name: String,
    level6_description: String,
    pk7_ID: Int,
    fk6_ID: Int,
    level7_name: String,
    level7_description: String,
    pk8_ID: Int,
    fk7_ID: Int,
    name: String,
    description: String
  }
  
  type Level9 {
    pk1_ID: Int,
    level1_name: String,
    level1_description: String,
    pk2_ID: Int,
    fk1_ID: Int,
    level2_name: String,
    level2_description: String,
    pk3_ID: Int,
    fk2_ID: Int,
    level3_name: String,
    level3_description: String
    pk4_ID: Int,
    fk3_ID: Int,
    level4_name: String,
    level4_description: String,
    pk5_ID: Int,
    fk4_ID: Int,
    level5_name: String,
    level5_description: String
    pk6_ID: Int,
    fk5_ID: Int,
    level6_name: String,
    level6_description: String,
    pk7_ID: Int,
    fk6_ID: Int,
    level7_name: String,
    level7_description: String,
    pk8_ID: Int,
    fk7_ID: Int,
    level8_name: String,
    level8_description: String,
    pk9_ID: Int,
    fk8_ID: Int,
    name: String,
    description: String
  }

`;

module.exports = typeDefs;