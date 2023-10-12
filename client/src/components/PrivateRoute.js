import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const {currentUser} = useSelector((state) => state.user);
  const current= useSelector((state) => state.user);
  console.log(currentUser)
  console.log(current)
  return currentUser ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default PrivateRoute;
