// Mongoose schema for a patient
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  contact: { type: String },
  address: { type: String },
  medicalHistory: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Patient', patientSchema);
