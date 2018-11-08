const mongoose = require('mongoose');
const AddressSchema = require('./addressSchema');
const ProductSchema = require('./product');
const Schema = mongoose.Schema;

const OrderDetailsSchema = new mongoose.Schema({
  productID: Schema.Types.Number,
  unitPrice: Number,
  quantity: Number,
  discount: Number,
  product : { type: Schema.Types.Number, ref: 'Product' }
}, {
  _id: false,
});

const OrderSchema = new mongoose.Schema({
  orderID: {
    type: Number,
    description: 'Order unique ID',
    unique: true,
  },
  customerID: String,
  employeeID: Number,
  orderDate: Date,
  requiredDate: Date,
  shippedDate: Date,
  shipVia: Number,
  freight: Number,
  shipName: String,
  details: {
    type: [OrderDetailsSchema],
    index: true,
    description: 'List of ordered products',
  },
});
module.exports = mongoose.model('Order', OrderSchema);
