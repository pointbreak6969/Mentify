import { useState } from "react";
import {validateEmail} from "../utils/validateEmail.js"
import "../styles/register.css";
import logo from "../assets/logo.png";
import student from "../assets/student.png";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { FaArrowLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const IsFormValid = () => {
    return (
      validateEmail(registerEmail) &&
      registerPassword.length >= 8 &&
      checkbox === true &&
      registerPassword === registerConfirmPassword
    );
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const registerData = {
        fullName: registerName,
        email: registerEmail,
        password: registerPassword,
      };
      // if (IsFormValid()) {
      //   await fetch("http://localhost:5050/auth/userRegister", {
      //     method: "POST",
      //     credentials: "include",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(registerData),
      //   }).then((response) => {
      //     if (response.status === 200) {
      //       return;
      //     } else {
      //       setErrorMessage("User Already Exists. Try Logging In");
      //       console.log(errorMessage);
      //     }
      //   });
      //   setRegisterName("");
      //   setRegisterEmail("");
      //   setRegisterPassword({
      //     value: "",
      //   });
      //   setRegisterConfirmPassword({
      //     value: "",
      //   });
      //   setCheckbox(false);
      // } else {
      //   setErrorMessage("Please Fill the Form Properly");
      // }
      if (IsFormValid()) {
        const response = await axios.post(
          "http://localhost:5050/api/user/register",
          registerData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
          {withCredentials: true,}
        );
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FaArrowLeft className="cursor-pointer navigate " onClick={handleGoBack} />
      <div className="register-container">
        <div className="register-wrapper">
          <div className="register-left">
            <div
              className="register-left-logo"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={logo} alt="" className="cursor-pointer" />
            </div>
            <div className="register-left-text">
              <h3>Learn From World's Best Instructors 🌍 Around The World.</h3>
            </div>
            <div className="register-left-img">
              <img src={student} alt="" />
            </div>
          </div>
          <div className="register-right">
            <form
              action=""
              className="register-right-wrapper"
              onSubmit={handleRegisterSubmit}
            >
              <h2>Create Account</h2>
              <TextField
                required
                id="standard-basic"
                label="Full Name"
                variant="standard"
                className="input-field"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
              />
              <TextField
                required
                id="standard-basic"
                label="Email"
                variant="standard"
                className="input-field"
                value={registerEmail}
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
              />
              <FormControl className="input-field" variant="standard">
                <InputLabel htmlFor="standard-adornment-password" required>
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  value={registerPassword}
                  onChange={(e) => {
                    setRegisterPassword(e.target.value);
                  }}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className="input-field" variant="standard">
                <InputLabel htmlFor="standard-adornment-password" required>
                  Confirm Password
                </InputLabel>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={registerConfirmPassword}
                  onChange={(e) => {
                    setRegisterConfirmPassword(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <div className="terms">
                <input
                  required
                  type="checkbox"
                  className="me-2"
                  value={checkbox}
                  onChange={(e) => {
                    setCheckbox(e.target.checked);
                  }}
                />

                <label htmlFor="">
                  {" "}
                  I agree to the <a to="/">terms of service</a> and{" "}
                  <a>privacy policy</a>{" "}
                </label>
              </div>
              <div className="register-submit">
                {errorMessage.length > 0 && (
                  <div style={{ color: "red" }}>{errorMessage}</div>
                )}
                <button type="submit">Submit</button>
              </div>
              <div className="next-option">
                <div className="or"></div>
                <span>Or Sign Up With</span>
              </div>
              <div className="signup-options">
                <FcGoogle />
                <MdOutlineFacebook style={{ color: "#316FF6" }} />
              </div>
              <div className="already-account">
                <span>Already have an account?</span>
                <Link to="/login">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
