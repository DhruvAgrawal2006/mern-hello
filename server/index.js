const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://mern-hello-qf35okgvc-dhruv-agrawals-projects-b7f11725.vercel.app/'
    'https://mern-hello-9gavs7jcc-dhruv-agrawals-projects-b7f11725.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// Add root route
app.get('/', (req, res) => {
  res.json({ message: "backend is working" });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get('/api/health', (req, res) => {
  res.json({ message: "backend is working" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});