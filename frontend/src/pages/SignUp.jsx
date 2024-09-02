import React from "react";

import AuthComponent from "../components/Auth/Auth";
import { AUTH_TYPES } from "../resources/constants";

const SignUpPage = () => {
  return <AuthComponent type={AUTH_TYPES.SING_UP} />;
};

export default SignUpPage;
