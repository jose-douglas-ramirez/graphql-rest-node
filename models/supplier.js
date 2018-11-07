const mongoose = require('mongoose');
const AddressSchema = require('./addressSchema');
const ProductTC =  require('./product');

const SupplierSchema = new mongoose.Schema(
  {
    supplierID: {
      type: Number,
      description: 'Supplier unique ID',
      unique: true,
    },
    companyName: {
      type: String,
      unique: true,
    },
    contactName: String,
    contactTitle: String,
    address: AddressSchema,
  }
);

module.exports = mongoose.model('Supplier', SupplierSchema);

