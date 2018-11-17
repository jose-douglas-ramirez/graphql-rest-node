const mongoContext = require('../dal/context');
const level1 = require('../MsSql/level1');
const level2 = require('../MsSql/level2');
const level3 = require('../MsSql/level3');
const level4 = require('../MsSql/level4');
const level5 = require('../MsSql/level5');
const level6 = require('../MsSql/level6');
const level7 = require('../MsSql/level7');
const level8 = require('../MsSql/level8');
const level9 = require('../MsSql/level9');

let connection;
function setConnection(conn){
    connection = conn;
}

const query = {
    Query: {
        // category: async (root, args, context) => {
        //     return await mongoContext.getCategory(args.categoryID);
        // },
        // product: async (root, args, context) => {
        //     return await mongoContext.getProduct(args.productID);
        // },
        // order: async (root, args, context) => {
        //     return await mongoContext.getOrder(args.orderID);
        // },
        // categories: async (root, args, context) => {
        //     return await mongoContext.getCategories();
        // },
        // products: async (root, args, context) => {
        //     return await mongoContext.getProducts();
        // },
        // orders: async (root, args, context) => {
        //     return await mongoContext.getOrders();
        // },
        level1: async (root, args, context) => {
            return await level1.loadLevel1(connection);
        },
        level2: async (root, args, context) => {
            return await level2.loadLevel2(connection);
        },
        level3: async (root, args, context) => {
            return await level3.loadLevel3(connection); 
        },
        level4: async (root, args, context) => {
            return await level4.loadLevel4(connection);
        },
        level5: async (root, args, context) => {
            return await level5.loadLevel5(connection);
        },
        level6: async (root, args, context) => {
            return await level6.loadLevel6(connection);
        },
        level7: async (root, args, context) => {
            return await level7.loadLevel7(connection);
        },
        level8: async (root, args, context) => {
            return await level8.loadLevel8(connection);
        },
        level9: async (root, args, context) => {
            return await level9.loadLevel9(connection);
        }
    }
};

module.exports = {
    setConnection,
    query
};