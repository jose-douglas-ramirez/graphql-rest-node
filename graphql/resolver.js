const mongoContext = require('../dal/context');
const level1 = require('../MsSql/level1');
const level2 = require('../MsSql/level2');
let connection;
function setConnection(conn){
    connection = conn;
}

const query = {
    Query: {
        category: async (root, args, context) => {
            return await mongoContext.getCategory(args.categoryID);
        },
        product: async (root, args, context) => {
            return await mongoContext.getProduct(args.productID);
        },
        order: async (root, args, context) => {
            return await mongoContext.getOrder(args.orderID);
        },
        categories: async (root, args, context) => {
            return await mongoContext.getCategories();
        },
        products: async (root, args, context) => {
            return await mongoContext.getProducts();
        },
        orders: async (root, args, context) => {
            return await mongoContext.getOrders();
        },
        level1: async (root, args, context) => {
            return await level1.loadLevel1(connection);
        },
        level2: async (root, args, context) => {
            return await level2.loadLevel2(connection);
        }
    }
};

module.exports = {
    setConnection,
    query
};