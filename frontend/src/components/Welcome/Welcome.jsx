import { Avatar, Button, Card, Col, Popconfirm,Row, Typography } from "antd";
import React from "react";

import { useWelcome } from "../../hooks/welcome.js";
import { BUTTON_LABELS, FALLBACK_IMAGE } from "../../resources/constants";
import { resources_EN } from "../../resources/resources";
import styles from "./Welcome.module.scss";

const { Title, Text } = Typography;

const WelcomeComponent = () => {
  const { loading, userDetails, handleLogout } = useWelcome();

  return (
    <div className={styles.welcomeContainer}>
      <Row justify="center" align="middle">
        <Col>
          <Card
            className={styles.welcomeCard}
            loading={loading}
            extra={
              <Popconfirm
                title={resources_EN.LOGOUT_CONFIRMATION_MSG}
                onConfirm={handleLogout}
                okText={resources_EN.YES_LABEL}
                cancelText={resources_EN.NO_LABEL}
              >
                <Button type="primary">{BUTTON_LABELS.LOGOUT}</Button>
              </Popconfirm>
            }
          >
            <div className={styles.welcomeContent}>
              {userDetails && Object.entries(userDetails).length > 0 ? (
                <>
                  <Avatar size={64} src={FALLBACK_IMAGE} />
                  <Title level={2} className={styles.welcomeTitle}>
                    {resources_EN.WELCOME_LABEL}, {userDetails.name}!
                  </Title>
                  <Text className={styles.welcomeDetails}>
                    {resources_EN.EMAIL_LABEL}: {userDetails.email}
                  </Text>
                </>
              ) : (
                <Text className={styles.welcomeDetails}>
                  {resources_EN.NO_DETAILS_MSG}
                </Text>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WelcomeComponent;
