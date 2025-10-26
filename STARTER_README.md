# HTF25-Team-121 — Hospital Management (Starter)

Simple full-stack starter project for a hackathon demo.

Structure
```
HTF25-Team-121/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   ├── routes/
│   │   ├── patientRoutes.js
│   │   └── doctorRoutes.js
│   └── models/
│       ├── patientModel.js
│       └── doctorModel.js

├── frontend/
│   ├── index.html
│   └── scripts/
│       └── main.js

└── README.md
```

Quick start (Windows PowerShell)

1. Backend

```powershell
cd backend
# install dependencies
npm install
# copy .env.example to .env and edit MONGO_URI if needed
copy .env.example .env
# run (use npm run dev if you want nodemon)
npm start
```

2. Frontend

Open `frontend/index.html` in your browser. The frontend uses fetch to `http://localhost:5000/api` by default.

Notes
- This project uses Node.js + Express + MongoDB (Mongoose).
- The backend listens on PORT from `.env` or 5000 by default.
- For a real deployment, secure environment variables and enable proper validation/auth.

Next steps you might add
- Validation and error handling
- Authentication (JWT)
- Pagination and search for records
- UI improvements (React, Bootstrap)

Enjoy the hackathon!
