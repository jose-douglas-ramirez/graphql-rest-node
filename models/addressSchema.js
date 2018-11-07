const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema(
  {
    street: String,
    city: String,
    region: String,
    postalCode: String,
    country: String,
    phone: String,
  }
);

module.exports = mongoose.model('AddressSchema', AddressSchema);
