const mongoContext = require('../dal/context');

const resolvers = {
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
        }
    }
};

module.exports = resolvers;