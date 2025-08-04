// src/components/StudentForm.jsx
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const StudentForm = ({ onSubmit }) => {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    subjects: "",
    marks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      name: studentData.name,
      age: parseInt(studentData.age),
      subjects: studentData.subjects.split(",").map((s) => s.trim()),
      marks: studentData.marks.split(",").map((m) => parseFloat(m.trim())),
    };

    onSubmit(formattedData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>Create Student</Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={studentData.name}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Age"
        name="age"
        type="number"
        value={studentData.age}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Subjects (comma separated)"
        name="subjects"
        value={studentData.subjects}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Marks (comma separated)"
        name="marks"
        value={studentData.marks}
        onChange={handleChange}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default StudentForm;
