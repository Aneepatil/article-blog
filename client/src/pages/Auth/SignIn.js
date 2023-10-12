import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container-fluid mt-5">
      <form className="mx-auto w-25">
      <h4 className="text-center text-white">Sign-In</h4>
        <div className="mb-3">
          <label className="form-label text-white">
            Email
          </label>
          <input
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">
            Password
          </label>
          <input
            type="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary d-flex justify-content-center text-white">
          Sign-in
        </button>
        <p className="mt-2 text-white">Do not have an account ? <Link to={'/sign-up'} className='text-decoration-none text-bold'>Sign-up</Link></p>
      </form>
    </div>
  );
};

export default SignIn;
