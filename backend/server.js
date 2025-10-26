// Load environment variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import Patient model
const Patient = require('./Patient');

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Add a test patient
async function addTestPatient() {
  try {
    const exists = await Patient.findOne({ name: 'John Doe' });
    if (!exists) {
      await Patient.create({ name: 'John Doe', age: 30, disease: 'Flu' });
      console.log('Test patient added!');
    } else {
      console.log('Test patient already exists');
    }
  } catch (err) {
    console.log('Error adding test patient:', err);
  }
}

addTestPatient();

// Simple route to check server
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
