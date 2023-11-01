import React from "react";
import styles from "./Notification.module.scss";
import { ReactComponent as NotificationSvg } from "../../../assets/icons/NotificationIcon.svg";
import { Icon } from "../../UI/Icon/Icon";

export const Notification = () => {
  return (
    <div className={styles.Notification}>
      <Icon Svg={NotificationSvg} className={styles.notificationIcon} />
      <div className={styles.pointNotification}></div>
    </div>
  );
};
