const mongoose = require('mongoose');
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

ProductSchema.index({ name: 1, supplierID: 1 }, { unique: true });

module.exports = mongoose.model('Product', ProductSchema);
