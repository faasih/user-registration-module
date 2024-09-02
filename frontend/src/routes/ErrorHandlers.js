import React from "react";
import { Button, Result } from "antd";

import {
  APP_ROUTES,
  BUTTON_LABELS,
  HTTP_STATUS_CODES,
} from "../resources/constants";
import { resources_EN } from "../resources/resources";

export const NOT_FOUND = () => {
  return (
    <Result
      status={HTTP_STATUS_CODES.NOT_FOUND.toString()}
      subTitle={resources_EN.ROUTE_NOT_FOUND_MSG}
      extra={
        <Button href={APP_ROUTES.DEFAULT} type="primary">
          {BUTTON_LABELS.GO_BACK}
        </Button>
      }
    />
  );
};
