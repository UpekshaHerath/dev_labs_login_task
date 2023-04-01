import React, { useState } from "react";
import Button from "@mui/material/Button";
import InputField from "../../components/InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./login.css";

const Login = () => {
  // yup validation object
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 charactores")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) =>
        console.log(`Email : ${values.email}\nPassword : ${values.password}`)
      }
    >
      {(formik) => (
        <Form>
          {console.log(formik.values)}
          <h1>Login</h1>
          <InputField label="email" name="email" type="email" />
          <InputField label="password" name="password" type="password" />

          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
