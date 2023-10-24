import React, { useState } from "react";
import '../Styles/Register/SignIn.css'

const Sign = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const [focused, setFocused] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Your signup logic here
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <div key={input.id} className="formInput">
            <label>{input.label}</label>
            <input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={values[input.name]}
              onChange={handleChange}
              onBlur={handleFocus}
              onFocus={() =>
                input.name === "confirmPassword" && setFocused(true)
              }
              focused={focused.toString()}
              required={input.required}
              pattern={input.pattern}
            />
            <span>{input.errorMessage}</span>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sign;
