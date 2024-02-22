import React from "react";
import TextField from "@mui/material/TextField";
import { muiCustomTheme } from "../utils/muiThemeCreator";
import { Link, useNavigate } from "react-router-dom";
import { useFormikValidation } from "../validation/Formik";
import { useMutation } from "@tanstack/react-query";
import userRequest from "../utils/userRequest";
import { RegisterSchema } from "../validation/Yup";
import { toast } from "react-toastify";
import "@fortawesome/fontawesome-free/css/all.min.css";
function Register() {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };

  const mutation = useMutation({
    mutationFn: (data) => {
      return userRequest.post("/register", data);
    },
    onSuccess: (data) => {
      localStorage.setItem("userJWT",data.data.token);
      toast.success(data.data.message);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const formik = useFormikValidation(mutation, RegisterSchema, initialValues);
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    formik;
  return (
    <>
       <section className="vh-100 d-flex flex-column">
        <div className="container-fluid flex-grow-1">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-lg-4 offset-lg-1">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-4">
                  <p className="lead fw-normal mb-0 me-3">Sign Up With</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                  <TextField
                    size="small"
                    label="Email"
                    name="email"
                    className="w-full"
                    theme={muiCustomTheme}
                    InputProps={{ sx: { borderRadius: 4 } }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && errors.email}
                  />
                  <div
                    className={`${
                      touched.email && errors.email
                        ? "opacity-100"
                        : "opacity-0"
                    } text-red-500 text-xs py-1`}
                  >
                    {errors.email ? errors.email : "None"}
                  </div>
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <TextField
                    size="small"
                    label="Password"
                    name="password"
                    type="password"
                    className="w-full"
                    theme={muiCustomTheme}
                    InputProps={{ sx: { borderRadius: 4 } }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && errors.password}
                  />
                  <div
                    className={`${
                      touched.password && errors.password
                        ? "opacity-100"
                        : "opacity-0"
                    } text-red-500 text-xs py-1`}
                  >
                    {errors.password ? errors.password : "None"}
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    SignUp
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account?{" "}
                    <a href="/login" className="link-danger">
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
