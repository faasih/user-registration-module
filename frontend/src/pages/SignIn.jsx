import React from "react";

import AuthComponent from "../components/Auth/Auth";
import { AUTH_TYPES } from "../resources/constants";

const SingInPage = () => {
  return <AuthComponent type={AUTH_TYPES.SING_IN} />;
};

export default SingInPage;
