const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = require('./category');

const ProductSchema = new mongoose.Schema(
  {
    productID: {
      type: Number,
      description: 'Unique product id',
      unique: true,
    },
    name: String,
    supplierID: Number,
    categoryID: Number,
    category: { type: Schema.Types.Number, ref: 'Category' },
    quantityPerUnit: String,
    unitPrice: {
      type: Number,
      index: true,
    },
    unitsInStock: Number,
    unitsOnOrder: Number,
    reorderLevel: Number,
    discontinued: Boolean,
  }
);
module.exports = mongoose.model('Product', ProductSchema);
