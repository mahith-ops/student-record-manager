import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes.js';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';


dotenv.config();




connectDB().catch((err) => {
    console.error('Failed to connect to DB ')
    process.exit(1);
})


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);


app.use('/api/students', studentRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});



export default app;
