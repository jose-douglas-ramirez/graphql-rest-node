const mongoose = require('mongoose');

const ShipperSchema = new mongoose.Schema(
  {
    shipperID: {
      type: Number,
      description: 'Shipper unique ID',
      unique: true,
    },
    companyName: String,
    phone: String,
  }
);

module.exports = mongoose.model('Shipper', ShipperSchema);