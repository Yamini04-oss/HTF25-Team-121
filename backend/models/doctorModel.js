// Mongoose schema for a doctor
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String },
  contact: { type: String },
  availability: { type: String }, // simple field for demo (e.g., "Mon-Fri 9-5")
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Doctor', doctorSchema);