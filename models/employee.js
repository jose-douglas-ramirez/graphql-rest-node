const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
  {
    employeeID: {
      type: Number,
      description: 'Category unique ID',
      index: true,
    },
    lastName: String,
    firstName: String,
    title: String,
    titleOfCourtesy: String,
    birthDate: Date,
    hireDate: Date,
    address: AddressSchema,
    notes: String,
    reportsTo: {
      type: Number,
      description: 'ID of chief',
    },
    territoryIDs: {
      type: [Number],
      index: true,
      description: 'Attached territory ID from region collection',
    },
  },
  {
    collection: 'northwind_employees',
  }
);

EmployeeSchema.index({ lastName: 1, firstName: 1 }, { unique: true });
EmployeeSchema.index(
  {
    lastName: 'text',
    firstName: 'text',
    title: 'text',
    notes: 'text',
    'address.street': 'text',
    'address.city': 'text',
    'address.region': 'text',
    'address.postalCode': 'text',
    'address.country': 'text',
    'address.phone': 'text',
  },
  {
    name: 'EmployeesTextIndex',
    default_language: 'english',
    weights: {
      lastName: 10,
      firstName: 10,
      title: 5,
      // rest fields get weight equals to 1
    },
  }
);


module.exports = mongoose.model('Employee', EmployeeSchema);