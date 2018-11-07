const mongoose = require('mongoose');

export const TerritorySchema = mongoose.Schema(
  {
    territoryID: Number,
    name: String,
  },
  {
    _id: false,
  }
);

export const RegionSchema = new mongoose.Schema(
  {
    regionID: {
      type: Number,
      description: 'Region unique ID',
      unique: true,
    },
    name: String,
    territories: {
      type: [TerritorySchema],
    },
  }
);

module.exports = mongoose.model('Region', RegionSchema);
