import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import { PropTypes } from "prop-types";
import React from "react";

import { useAuth } from "../../hooks/auth";
import {
  Assets,
  AUTH_TYPES,
  BUTTON_LABELS,
  FORM_FIELDS,
  REGEX,
} from "../../resources/constants";
import { resources_EN } from "../../resources/resources";
import styles from "./Auth.module.scss";

const { Text } = Typography;

const SignInLayout = () => {
  return (
    <>
      <Col span={16}>
        <Form.Item
          label={resources_EN.EMAIL_LABEL}
          name={FORM_FIELDS.EMAIL_ADDRESS}
          rules={[
            { required: true, message: resources_EN.EMAIL_REQUIRED_MSG },
            {
              pattern: new RegExp(REGEX.EMAIL_ADDRESS),
              message: resources_EN.VALID_EMAIL_MSG,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={16}>
        <Form.Item
          label={resources_EN.PASSWORD_LABEL}
          name={FORM_FIELDS.PASSWORD}
          rules={[
            { required: true, message: resources_EN.PASSWORD_REQUIRED_MSG },
            {
              pattern: new RegExp(REGEX.PASSWORD),
              message: resources_EN.VALID_PASSWORD_MSG,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Col>
    </>
  );
};
const SignUpLayout = () => {
  return (
    <>
      <Col span={16}>
        <Form.Item
          label={resources_EN.EMAIL_LABEL}
          name={FORM_FIELDS.EMAIL_ADDRESS}
          rules={[
            { required: true, message: resources_EN.EMAIL_REQUIRED_MSG },
            {
              pattern: new RegExp(REGEX.EMAIL_ADDRESS),
              message: resources_EN.VALID_EMAIL_MSG,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={16}>
        <Form.Item
          label={resources_EN.USER_NAME_LABEL}
          name={FORM_FIELDS.USERNAME}
          rules={[
            { required: true, message: resources_EN.USER_NAME_REQUIRED_MSG },
            {
              pattern: new RegExp(REGEX.USER_NAME),
              message: resources_EN.VALID_NAME_MSG,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={16}>
        <Form.Item
          label={resources_EN.PASSWORD_LABEL}
          name={FORM_FIELDS.PASSWORD}
          rules={[
            { required: true, message: resources_EN.PASSWORD_REQUIRED_MSG },
            {
              pattern: new RegExp(REGEX.PASSWORD),
              message: resources_EN.VALID_PASSWORD_MSG,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Col>
    </>
  );
};

const SignInNote = () => {
  return (
    <Text type="secondary">
      Not a member? <a href="/sign-up">Proceed to Sign Up</a>
    </Text>
  );
};
const SignUpNote = () => {
  return (
    <Text type="secondary">
      Already a member? <a href="/">Proceed to Sign In</a>
    </Text>
  );
};

const AuthComponent = (props) => {
  const { type } = props;

  const { loading, CARD_LABEL, onFinish, onFinishFailed } = useAuth(type);

  return (
    <div className={styles.authLayout}>
      <Row align="middle">
        <Col xs={24} md={12} lg={12}>
          <img
            src={Assets.backgroundImage}
            alt="auth-image"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </Col>
        <Col xs={24} md={12} lg={12} style={{ padding: "0 3rem" }}>
          <Card title={CARD_LABEL} style={{ border: "none" }}>
            <Form
              name="authForm"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              {type === AUTH_TYPES.SING_IN ? (
                <SignInLayout />
              ) : (
                <SignUpLayout />
              )}

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  disabled={loading}
                >
                  {BUTTON_LABELS.SUBMIT}
                </Button>
              </Form.Item>
              <Form.Item>
                {type === AUTH_TYPES.SING_IN ? <SignInNote /> : <SignUpNote />}
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AuthComponent;
AuthComponent.propTypes = {
  type: PropTypes.string,
};
