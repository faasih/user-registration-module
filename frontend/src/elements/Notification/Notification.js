import { notification as CustomNotification } from "antd";

import { NotificationConstant } from "./notificationConstants";

const notificationConfig = (
  message,
  description,
  duration,
  className,
  placement
) => {
  return {
    message,
    description,
    duration: duration ?? 2,
    className,
    placement,
  };
};

const styleClass = (className) => {
  const classes = {
    error: "errorAlert",
    success: "successAlert",
    warning: "warningAlert",
    info: "infoAlert",
  };
  return classes[className];
};

export const notification = (
  notiType,
  message,
  description,
  duration,
  className,
  placement = `${NotificationConstant.ALIGN_BOTTOM_RIGHT}`
) => {
  CustomNotification[notiType](
    notificationConfig(
      message,
      description,
      duration,
      styleClass(notiType),
      placement
    )
  );
};
