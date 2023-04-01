import React from "react";
import { ErrorMessage, useField } from "formik";
import { TextField } from "@mui/material";

export default function InputField({ label, ...props }) {
  const [field, meta] = useField(props);

  const inputFieldStyles = {
    display: "flex",
    flexDirection: "column",
    padding: "30",
  };

  return (
    <div style={inputFieldStyles}>
      <TextField {...field} {...props} label={field.name} variant="standard" />
      <div style={{ marginBottom: "30px" }}>
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
}
