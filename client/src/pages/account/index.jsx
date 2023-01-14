import React from "react";
import BgCup from "../../components/bg-cup";
import { useFormik } from "formik";
import "./index.scss";
import { Link } from "react-router-dom";

const Account = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container">
      <BgCup />
      <div className="account">
        <h1>LOGIN</h1>
        <p>Please login below account detail</p>
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <br />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <br />
            <button className="signin" type="submit">
              SIGN IN
            </button>
            <button type="submit">FORGOT PASSWORD?</button>
            <p>DON'T HAVE AN ACCOUNT?</p>
            <Link to={"/pages/create-account"}> Create Account?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
