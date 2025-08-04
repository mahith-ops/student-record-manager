// src/pages/CreateStudentPage.jsx
import React from "react";
import StudentForm from "../components/StudentForm";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateStudentPage = () => {
  const navigate = useNavigate();

  const handleCreateStudent = async (studentData) => {
    try {
      const res = await axiosInstance.post("/students", studentData);
      toast.success("Student created successfully!");
      navigate("/students"); // or wherever your student list is
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to create student");
    }
  };

  return <StudentForm onSubmit={handleCreateStudent} />;
};

export default CreateStudentPage;
