import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import baseURL from "../../utils/baseURL";

const SignUp = () => {
  const navigate=useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${baseURL}/auth/sign-up`, formData);

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
      }
      setLoading(false);
      console.log(data)
      navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data?.message);
    }

    setFormData({
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="container-fluid mt-5">
      <form className="mx-auto w-25" onSubmit={handleSubmit}>
        <h4 className="text-center text-white">Sign Up</h4>
        <div className="mb-3">
          <label className="form-label text-white">User Name</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary d-flex justify-content-center"
        >
          Sign up
        </button>
        <div>{error && <p className="text-white mt-2">{error}</p>}</div>
        <p className="mt-2 text-white">
          Have an account ?{" "}
          <Link to={"/sign-in"} className="text-decoration-none text-bold">
            {loading ? "Loading" : "Sign-Up"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
