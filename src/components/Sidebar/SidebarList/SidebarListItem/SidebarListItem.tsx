import React from "react";
import { classNames } from "../../../../helpers/classNames/classNames";
import { Icon } from "../../../UI/Icon/Icon";
import styles from "./SidebarListItem.module.scss";
import { SidebarItemDataProps } from "../../../../constants/sidebarItemData/sidebarItemData";

interface NavItemProps {
  className?: string;
  navItem: SidebarItemDataProps;
}

export const SidebarListItem = (props: NavItemProps) => {
  const { className, navItem } = props;

  return (
    <div className={classNames(styles.SidebarItem, {}, [className])}>
      <Icon Svg={navItem.icon} className={styles.sidebarIcon} />
      <div className={styles.sidebarText}>{navItem.text}</div>
    </div>
  );
};
