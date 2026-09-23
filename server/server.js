import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
