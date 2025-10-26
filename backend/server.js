// Simple Express server for Hospital Management (beginner-friendly)
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Patient = require('./Patient'); // import Patient model
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json()); // parse JSON bodies

// Import route modules
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');

// Mount API routes
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);

// Connect to MongoDB using MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB Connected');
  
  // Add a test patient after successful DB connection
  async function addTestPatient() {
    try {
      await Patient.create({ name: 'John Doe', age: 30, disease: 'Flu' });
      console.log('Test patient added!');
    } catch (err) {
      console.error('Error creating test patient:', err.message);
    }
  }

  addTestPatient();
})
.catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));