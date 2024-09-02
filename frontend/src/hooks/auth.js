import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { APP_ROUTES, AUTH_TYPES } from "../resources/constants";
import { resources_EN } from "../resources/resources";
import { loginService, signUpService } from "../services/Auth";

export const useAuth = (type) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const CARD_LABEL =
    type === AUTH_TYPES.SING_IN
      ? resources_EN.SIGN_IN_LABEL
      : resources_EN.SIGN_UP_LABEL;

  const onFinish = async (values) => {
    let res;

    if (type === AUTH_TYPES.SING_IN) {
      res = await loginService(values, setLoading);
    } else {
      res = await signUpService(values, setLoading);
    }

    if (res) {
      navigate(`/${APP_ROUTES.HOME}`);
    }
  };

  const onFinishFailed = (values) => {
    console.log("on finish failed values:", values);
  };
  return {
    loading,
    CARD_LABEL,
    onFinish,
    onFinishFailed,
  };
};
