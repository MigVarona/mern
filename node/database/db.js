import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();


const url = process.env.MONGO_URL;

mongoose.connect(url);

const db = mongoose.connection;
db.on('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', () => {
  console.log('Error connecting to MongoDB');
});

export default db;
