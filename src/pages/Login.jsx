import React from 'react'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { muiCustomTheme } from "../utils/muiThemeCreator";
function Login() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="md:w-96 sm:w-80 ">
          <form
            className="rounded-lg p-12"
            style={{ outline: "1px solid rgb(27, 133, 231)" }}
          >
            <h2 className="font-bold text-xl text-center">
              Login
            </h2>

            <div className="mt-4">
              <TextField
                name="email"
                size="small"
                theme={muiCustomTheme}
                label="Email"
                className="w-full rounded-md"
              />
            </div>

            <div className="mt-4 mb-4">
              <TextField
                name="password"
                size="small"
                theme={muiCustomTheme}
                label="Password"
                className="w-full rounded-md"
              />
            </div>

            <div>
              <Button
                variant="contained"
                size="medium"
                className="w-full"
                style={{ fontWeight: "bold" }}
              >
                LOGIN
              </Button>
            </div>
            <div className="mb-2 mt-2 ml-8 sm:ml-4 md:ml-8 lg:ml-8 xl:ml-14">
              <span className="text-xs">Don't have an account? </span>
              <Link
                className="text-sm"
                to="/register"
                style={{ color: "rgb(27, 133, 231)" }}
              >
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login