const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
  {
    customerID: {
      type: String,
      description: 'Customer unique ID',
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

module.exports = mongoose.model('Customer', CustomerSchema);
