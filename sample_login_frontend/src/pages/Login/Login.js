import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./login.css";

const Login = () => {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Field 1: ${field1}, Field 2: ${field2}`);
    setField1("");
    setField2("");
  };

  return (
    <form onSubmit={handleSubmit} className="loginContainer">
      <TextField
        label="email"
        value={field1}
        onChange={(e) => setField1(e.target.value)}
        margin="normal"
        variant="outlined"
        color="primary"
        fullWidth
      />
      <TextField
        label="password"
        value={field2}
        onChange={(e) => setField2(e.target.value)}
        margin="normal"
        variant="outlined"
        color="primary"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Login;
