import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import './App.css'
export default function App() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .required("This field is required!"),
      last_name: Yup.string()
        .required("This field is required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("This field is required!"),
      message: Yup.string()
        .required("This field is required!"),
    }),
    // onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2));
    // }
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm()
      }, 1000);
    },
    isInitialValid:false
  });

  return (
    <div className="container">
      <h1>Homework</h1>
      <h2>Validation with Formik and Yup</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='input-item'>
          <label>First Name: </label>
          <input
            type="text"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.first_name && formik.touched.first_name && (
            <p className='error'>{formik.errors.first_name}</p>
          )}
        </div>
        <div className='input-item'>
          <label>Last Name: </label>
          <input
            type="text"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.last_name && formik.touched.last_name && (
            <p className='error'>{formik.errors.last_name}</p>
          )}
        </div>
        <div className='input-item'>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <p className='error'>{formik.errors.email}</p>
          )}
        </div>
        <div className='input-item'>
          <label>Message: </label>
          <input
            type="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.message && formik.touched.message && (
            <p className='error'>{formik.errors.message}</p>
          )}
        </div>
        <div>
          <button disabled={!formik.isValid} className='btn-submit' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}