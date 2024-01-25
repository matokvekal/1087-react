import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup"; // Import yup for validation

export default function FormikForm() {
  return (
    <>
      <h1>Formik yap Demo</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
