const category = require('../models/category');
const product = require('../models/product');
const order = require('../models/order');


async function getOrder(orderId, orderResult) {
    if (!orderResult) {
        orderResult = await order.findOne({
            orderID: orderId
        });
    }

    const productsPromises = []
    orderResult.details.forEach(orderDetail => {
        productsPromises.push(new Promise(async (resolve, reject) => {
            const _productResult = await product.findOne({
                productID: orderDetail.productID
            });
            orderDetail.product = _productResult;
            orderDetail.product.category = await getCategory(orderDetail.product.categoryID);
            resolve();
        }));
    });

    await Promise.all(productsPromises);
    return orderResult.toJSON();
}

async function getCategory(categoryId) {
    return await category.findOne({
        categoryID: categoryId
    });
}

async function getProduct(productId) {
    return await product.findOne({
        productID: productId
    });
}

async function getCategories() {
    return await category.find();
}

async function getProducts() {
    return await product.find()
}

async function getOrders() {
    const orderResult = await order.find();

    const ordersPromises = []
    orderResult.forEach(orderDetail => {
        ordersPromises.push(getOrder(orderDetail.orderID, orderDetail));
    });

    await Promise.all(ordersPromises);
    return orderResult;
}


module.exports = {
    getOrder,
    getCategory,
    getProduct,
    getOrders,
    getCategories,
    getProducts
}
