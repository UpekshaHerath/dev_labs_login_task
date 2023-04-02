import React, { useState } from "react";
import Button from "@mui/material/Button";
import InputField from "../../components/InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./login.css";

const Login = () => {
  // yup validation object
  const validate = Yup.object({
    userName: Yup.string()
      .required("User name is required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 charactores")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) =>
        console.log(`User Name : ${values.userName}\nPassword : ${values.password}`)
      }
    >
      {(formik) => (
        <Form>
          {console.log(formik.values)}
          <h1>Login</h1>
          <InputField label="user name" name="userName" type="text" />
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
