import { notification } from "../elements/Notification/Notification";
import { NotificationTypes } from "../elements/Notification/notificationConstants";
import { TOKEN } from "../resources/constants";

import axios from "./Axios";

const BASE_URL = process.env.REACT_APP_BE_SERVICE;

export const loginService = async (obj, setState) => {
  setState(true);
  try {
    const URL = `${BASE_URL}/auth/sign-in`;
    const response = await axios.post(URL, obj);
    const { data } = response;
    localStorage.setItem(TOKEN.ACCESS, data?.accessToken);
    setState(false);
    return true;
  } catch (err) {
    const { response } = err;
    console.error("error while making login call", err);
    setState(false);
    notification(
      NotificationTypes.ERROR,
      response.data.error,
      response.data.message,
      2
    );
  }
};

export const signUpService = async (obj, setState) => {
  setState(true);
  try {
    const URL = `${BASE_URL}/auth/sign-up`;
    const response = await axios.post(URL, obj);
    const { data } = response;
    localStorage.setItem(TOKEN.ACCESS, data?.accessToken);
    setState(false);
    return true;
  } catch (err) {
    const { response } = err;
    console.error("error while making sign up call", err);
    setState(false);
    notification(
      NotificationTypes.ERROR,
      response.data.error,
      response.data.message,
      2
    );
  }
};
