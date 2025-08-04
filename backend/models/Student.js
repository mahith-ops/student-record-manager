import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email: String,
  subjects: [
    {
      subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true,
      },
      marks: { type: Number, default: null },
    }
  ],
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
