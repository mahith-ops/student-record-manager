// src/pages/LoginPage.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { Box, Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    console.log("Logging in with:", userData);
    navigate("/dashboard");
  };

  // Optional animation for page entry
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={animationProps}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        {/* Login Form */}
        <LoginForm onLogin={handleLogin} />

        {/* Sign up Link */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "none", color: "#1976d2" }}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </animated.div>
  );
};

export default LoginPage;
