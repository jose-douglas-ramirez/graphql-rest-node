const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema(
  {
    categoryID: {
      type: Number,
      description: 'Category unique ID',
      unique: true,
    },
    name: {
      type: String,
      unique: true,
    },
    description: String,
  }
);

module.exports = mongoose.model('Category', CategorySchema);
