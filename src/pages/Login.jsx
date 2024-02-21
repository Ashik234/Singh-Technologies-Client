import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { muiCustomTheme } from "../utils/muiThemeCreator";
import { useNavigate } from "react-router-dom";
import { useFormikValidation } from "../validation/Formik";
import { useMutation } from "@tanstack/react-query";
import userRequest from "../utils/userRequest";
import { LoginSchema } from "../validation/Yup";
import { toast } from "react-toastify";
function Login() {
    const navigate = useNavigate();
  const initialValues = { email: "", password: "" };

  const mutation = useMutation({
    mutationFn: (data) => {
      return userRequest.post("/login", data);
    },
    onSuccess: (data) => {
      localStorage.setItem("userJWT",data.data.token);
      toast.success(data.message)
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const formik = useFormikValidation(mutation, LoginSchema, initialValues);
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    formik;
  return (
    <>
      <div className="flex justify-center bg-F9F9F9 p-4 sm:p-14 lg:h-screen">
        <div className="bg-white lg:rounded-l-xl rounded-l-md border sm:w-1/2">
        <h1 className="p-4">LOGO</h1>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-bold text-2xl">
                Chase Your Goals, Not Just Jobs <br /> Login for Greatness!
              </h1>
            </div>
          </div>

          <div className="lg:w-96 sm:w-80 mx-auto px-4">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="mt-8">
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
                    touched.email && errors.email ? "opacity-100" : "opacity-0"
                  } text-red-500 text-xs py-1`}
                >
                  {errors.email ? errors.email : "None"}
                </div>
              </div>

              <div className="mb-4">
                <TextField
                  size="small"
                  label="Password"
                  name="password"
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

              <div className="flex justify-center mb-4">
                <button
                  type="submit"
                  className="border-2 p-2 rounded-lg w-56 text-white hover:drop-shadow-md bg-blue-500"
                >
                  <span style={{ marginRight: "10px" }}>Login</span>
                </button>
              </div>
                  <span className="text-center">Don't have an Account? <Link to="/register" >Signup </Link></span>
            </form>
          </div>
        </div>

        <div className="bg-slate-500 rounded-r-xl w-1/2 hidden sm:block"></div>
      </div>
    </>
  );
}

export default Login;
