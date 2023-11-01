import styles from "./Avatar.module.scss";
import { classNames } from "../../../helpers/classNames/classNames";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, alt }: AvatarProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(styles.Avatar, {}, [className])}
    />
  );
};
