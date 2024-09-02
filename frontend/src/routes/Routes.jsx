import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "../pages/Home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import { ProtectedRoutes, PublicRoutes } from "../routes/RouteWrapper";
import { NOT_FOUND } from "./ErrorHandlers";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="*" element={<NOT_FOUND />} />
        </Route>

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="home/*" element={<HomePage />} />
          <Route path="*" element={<NOT_FOUND />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
