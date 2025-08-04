// src/pages/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/create-student");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateClick}
        sx={{ mb: 2 }}
      >
        Create Student
      </Button>

      {/* Add other dashboard content here */}
    </Box>
  );
};

export default Dashboard;
