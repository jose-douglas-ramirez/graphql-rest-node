const category = require('../models/category');
const product = require('../models/product');
const order = require('../models/order');

const resolvers = {
    Query: {
        category: async (root, args, context) => {
            return await category.findOne({
                categoryID: args.categoryID
            });
        },
        product: async (root, args, context) => {
            return await product.findOne({
                productID: args.productID
            });
        },
        order: async (root, args, context) => {
            return await order.findOne({
                orderID: args.orderID
            });
        }
    }
};

module.exports = resolvers;