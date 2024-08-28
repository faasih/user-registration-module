import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoutes, PublicRoutes } from "../routes/RouteWrapper";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import HomePage from "../pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sing-up" element={<SignUpPage />} />
          <Route path="*" element={<p>Error 404</p>} />
        </Route>

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="home/*" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
