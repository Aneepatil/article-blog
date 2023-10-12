import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
} from "../redux/slice/userSlice/userSlice";

const Header = () => {
  const navigate = useNavigate()
  const data = useSelector((state) => state?.user?.currentUser?.data);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    localStorage.clear()
    navigate('sign-in')
  };
  
  return (
    <div className="bg-light max-w-6xl mx-auto">
      <div className="container d-flex justify-content-between align-items-center p-3">
        <Link className="navbar-brand" to={"/"}>
          Blog
        </Link>
        <div>
          <form className="form-inline d-flex gap-3">
            <input
              className="mr-sm-2 p-2"
              type="search"
              placeholder="Search Article..."
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <ul className="d-flex justify-content-between text-align-center list-unstyled">
          <li>
            <Link to={"/"} className="text-decoration-none px-2">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/create-article"} className="text-decoration-none px-2">
              Create Blog
            </Link>
          </li>
          <li>
            {data ? (
              <>
                <span className="text-bold text-dark text-decoration-none px-2">
                  {data?.username}
                </span>
              </>
            ) : (
              <Link to={"/sign-in"} className="text-decoration-none px-2">
                Sign-In
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
