import { notification } from "../elements/Notification/Notification";
import { NotificationTypes } from "../elements/Notification/notificationConstants";
import { TOKEN } from "../resources/constants";

import axios from "./Axios";

const BASE_URL = process.env.REACT_APP_BE_SERVICE;

export const getLoggedInUserDetails = async (setState) => {
  setState(true);
  try {
    const token = localStorage.getItem(TOKEN.ACCESS);
    const URL = `${BASE_URL}/users/me`;
    const response = await axios.get(URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const { data } = response;
    setState(false);
    return data;
  } catch (err) {
    const { response } = err;
    console.error("error while making getLoggedInUserDetails API call", err);
    setState(false);
    notification(
      NotificationTypes.ERROR,
      response.data.error,
      response.data.message,
      2
    );
  }
};
