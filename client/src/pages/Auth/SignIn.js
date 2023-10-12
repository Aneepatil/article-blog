import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signInFailure, signInStart, signInSuccess } from "../../redux/slice/userSlice/userSlice";

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const { data } = await axios.post(
        `http://localhost:8800/api/auth/sign-in`,
        formData
      );
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      console.log(data);
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error?.response?.data?.message));
    }
    setFormData({
      email: "",
      password: "",
    });
  };


  return (
    <div className="container-fluid mt-5">
      <form className="mx-auto w-25" onSubmit={handleSubmit}>
        <h4 className="text-center text-white">Sign-In</h4>
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
          className="btn btn-primary d-flex justify-content-center text-white"
        >
          Sign-in
        </button>
        <div>{error && <p className="text-white mt-2">{error}</p>}</div>
        <p className="mt-2 text-white">
        Do not have an account ?{" "}
          <Link to={"/sign-up"} className="text-decoration-none text-bold">
            {loading ? "Loading" : "Sign-Up"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
