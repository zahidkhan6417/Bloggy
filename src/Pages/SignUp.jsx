import { useState } from "react";
import bloggy1 from "../images/bloggy1.png"
//import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Register/SignIn.css"
import Navbar from "../Components/Navbar";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    password:'',
    confirmPassword:"",
  });

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      // Check if the form is valid before proceeding
      return;
    }
    if (values.password !== values.confirmPassword) {
      setError("Passwords don't match!");
      return;
    }
    setError("");
    try {
      await SignIn(email, password);
      navigate("/#home");
      goTop();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <section className="login-section">
        <div className="login-banner">
        </div>
        {/* form  */}
        <div className="login-page">
          <img src={bloggy1} className="side-img" alt="bloggy"></img>
          <form
            onSubmit={handleSubmit}
            className="forms"
          >
            <h1 className="header1"> Sign Up </h1>
            <p className="header-para1">Hey, Please fill your details.</p>
            {/* {error ? (
              <p className="notif">
                Wrong email or password
              </p>
            ) : null} */}
            <label className="email-field">
              Email
            </label>
            <input
              className="email__field"
              type="email"
              placeholder="bloggy@gymail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              onInvalid={(e) => e.target.setCustomValidity("Please enter a valid email address")}
              onInput={(e) => e.target.setCustomValidity('')}
            ></input>

            <label className="pass-field">
              Password
            </label>
            <input
              className="pass__field"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
              onInvalid={(e) => e.target.setCustomValidity("Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character")}
              onInput={(e) => e.target.setCustomValidity('')}
            ></input>

            <label className="pass-field">
              Confirm Password
            </label>
            <input
              className="pass__field"
              type="password"
              placeholder="confirm password"
              value={values.confirmPassword}
              onChange={(e) => setValues(e.target.value)}
              required
              // onInvalid={(e) => e.target.setCustomValidity("Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character")}
              // onInput={(e) => e.target.setCustomValidity('')}
            ></input>

            <button
              type="submit"
              className="btn-1"
            >
              Sign Up
            </button>
            <div className="new-user">
              <p className="user-para">Already have an account</p>
              <Link
                to="/signin"
                className="sign-link"
              >
                Sign In
              </Link>
            </div>
            <p className="test-account">
              (Make <span className="text">new account</span> or go to
              <span className="text"> Sign In </span>
               page for test account)
            </p>
            
          </form>
        </div>
        {/* <Footer /> */}
      </section>
    </>
  );
}

export default SignIn;