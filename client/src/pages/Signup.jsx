import { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/context.jsx";
import { validateEmail } from "../utils/validateEmail.js";
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
  const {setUser, setToken} = useContext(AppContext);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [age, setAge] = useState("");
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
      checkbox === true
    );
  };
  const clearForm = () => {
    setRegisterName("");
    setRegisterEmail("");
    setRegisterPassword("");
    setAge("");
    setCheckbox(false);
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const registerData = {
        fullname: registerName,
        email: registerEmail,
        age: age,
        password: registerPassword,
      };
      
      if (IsFormValid()) {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/v1/user/register",
            registerData,
            {
              withCredentials: true,
            }
          );
          
          const data = response.data.message;
          console.log(data);
          clearForm(); // Clear the form after successful registration
          navigate("/");
        } catch (error) {
          console.log("Error while registering the user", error);
        }
      }
    } catch (error) {

      console.error("Error:", error);
      setErrorMessage("All fields are required")
    }
  };
  

  return (
    <>
      <FaArrowLeft
        className="cursor-pointer navigate "
        onClick={handleGoBack}
      />
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
                label="Full Name"
                variant="standard"
                className="input-field"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
              />
              <TextField
                required
                label="Email"
                variant="standard"
                className="input-field"
                value={registerEmail}
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
              />
              <TextField
                required
                label="Age"
                variant="standard"
                className="input-field"
                value={age}
                onChange={(e) => setAge(e.target.value)}
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
