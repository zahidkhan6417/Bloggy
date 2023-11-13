import { useState } from "react";
import bloggy1 from "../images/bloggy1.png"
// import { UserAuth } from "../Context/AuthContext.js";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Register/SignIn.css"
import Navbar from "../Components/Navbar.jsx"

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            <h1 className="header"> Sign In </h1>
            <p className="header-para">Welcome Back! Please enter your details.</p>
            {error ? (
              <p className="notif">
                Wrong email or password
              </p>
            ) : null}
            <label className="email-field">
              Email
            </label>
            <input
              className="email__field"
              placeholder="bloggy@gymail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label className="pass-field">
              Password
            </label>
            <input
              className="pass__field"
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button
              type="submit"
              className="btn-1"
            >
              Sign In
            </button>
            <div className="new-user">
              <p className="user-para">New to Bloggy?</p>
              <Link
                to="/signup"
                className="sign-link"
              >
                Sign Up for free
              </Link>
            </div>
            {/* <p className="test-account">
              <span className="text">Test Account</span> -
              gymate@gymail.com <span className="text"> / </span>
              testpassword123
            </p> */}
            
          </form>
        </div>
        {/* <Footer /> */}
      </section>
    </>
  );
}

export default SignIn;