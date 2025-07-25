// src/components/LoginForm.jsx
import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Alert,
} from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // React Spring animation
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 180, friction: 18 },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      const data = response.data;
      setError(null);
      localStorage.setItem("token", data.token);
      if (onLogin) onLogin(data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <animated.div style={animationProps}>
      <Box
        sx={{ display: "flex", justifyContent: "center", mt: 8 }}
      >
        <Card sx={{ width: 400, p: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom align="center">
              Login
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </animated.div>
  );
};

export default LoginForm;
