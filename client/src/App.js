import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ArticleListing from "./pages/Articles/ArticleListing";
import CreateArticle from "./pages/Articles/CreateArticle";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={"/"} element={<ArticleListing />} />
        </Route>
        <Route path={"/create-article"} element={<CreateArticle />} />
        <Route path={"/sign-in"} element={<SignIn />} />
        <Route path={"/sign-up"} element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
