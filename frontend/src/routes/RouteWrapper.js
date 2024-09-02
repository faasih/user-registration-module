import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import { APP_ROUTES } from "../resources/constants";

import { Auth } from "./Auth";

export const ProtectedRoutes = () => {
  const auth = Auth.getAuth();

  const navigation = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigation(APP_ROUTES.DEFAULT);
    }
  }, [auth]);

  return auth ? <Outlet /> : <Navigate to={APP_ROUTES.DEFAULT} />;
};

export const PublicRoutes = () => {
  const auth = Auth.getAuth();
  return auth ? <Navigate to={APP_ROUTES.HOME} /> : <Outlet />;
};
