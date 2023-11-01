import React from "react";
import { classNames } from "../../../helpers/classNames/classNames";
import styles from "./Icon.module.scss";

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = (props: IconProps) => {
  const { className, Svg, ...otherProps } = props;

  return (
    <Svg className={classNames(styles.Icon, {}, [className])} {...otherProps} />
  );
};
