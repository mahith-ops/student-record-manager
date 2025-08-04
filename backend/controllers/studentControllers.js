import Student from '../models/Student.js';

// ✅ 1. Create Student with subjects (expects array of subjectIds)
export const createStudent = async (req, res) => {
  try {
    const { name, age, email, subjects } = req.body;

    const subjectEntries = subjects.map(subjectId => ({
      subject: subjectId,
      marks: null,
    }));

    const student = new Student({ name, age, email, subjects: subjectEntries });
    await student.save();

    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ 2. Get All Students with subject names
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("subjects.subject", "name");
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ 3. Update a Student (basic info or subjects array)
export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ 4. Delete Student
export const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ 5. Update Marks for a Specific Subject of a Student
export const updateMarks = async (req, res) => {
  const { studentId, subjectId, marks } = req.body;

  try {
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ error: "Student not found" });

    const subjectEntry = student.subjects.find(
      s => s.subject.toString() === subjectId
    );

    if (!subjectEntry)
      return res.status(404).json({ error: "Subject not found for this student" });

    subjectEntry.marks = marks;
    await student.save();

    res.json({ message: "Marks updated", student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
