import mongoose from 'mongoose';



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Oops! Could not connect:', error.message);
    throw error; // This tells the robot to stop if no connection
  }
};

export default connectDB;