

import mongoose from 'mongoose';


const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  subjects: {
    type: [String], 
    default: []
  },
  marks: {
    type: [Number],
    default: []
  }
}, {
  timestamps: true 
});


export default mongoose.model('Student', studentSchema);
