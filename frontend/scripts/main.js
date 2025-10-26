// Simple frontend logic to interact with backend API
// Assumes backend runs on http://localhost:5000 (change if needed)
const API_BASE = 'http://localhost:5000/api';

// Helper to render items into a container
function renderList(containerId, items, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `<strong>${item.name}</strong>` +
      (item.specialty ? `<div>Specialty: ${item.specialty}</div>` : '') +
      (item.age ? `<div>Age: ${item.age}</div>` : '') +
      (item.contact ? `<div>Contact: ${item.contact}</div>` : '');
    container.appendChild(el);
  });
}

// Fetch and show patients
async function loadPatients() {
  try {
    const res = await fetch(`${API_BASE}/patients`);
    const data = await res.json();
    renderList('patientsList', data, 'patient');
  } catch (err) {
    console.error('Failed to load patients', err);
  }
}

// Fetch and show doctors
async function loadDoctors() {
  try {
    const res = await fetch(`${API_BASE}/doctors`);
    const data = await res.json();
    renderList('doctorsList', data, 'doctor');
  } catch (err) {
    console.error('Failed to load doctors', err);
  }
}

// Submit patient form
document.getElementById('patientForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const body = {
    name: form.name.value,
    age: form.age.value ? Number(form.age.value) : undefined,
    gender: form.gender.value,
    contact: form.contact.value,
    address: form.address.value
  };
  try {
    await fetch(`${API_BASE}/patients`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    form.reset();
    loadPatients();
  } catch (err) {
    console.error('Failed to create patient', err);
  }
});

// Submit doctor form
document.getElementById('doctorForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const body = {
    name: form.name.value,
    specialty: form.specialty.value,
    contact: form.contact.value,
    availability: form.availability.value
  };
  try {
    await fetch(`${API_BASE}/doctors`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    form.reset();
    loadDoctors();
  } catch (err) {
    console.error('Failed to create doctor', err);
  }
});

// Initial load
loadPatients();
loadDoctors();
