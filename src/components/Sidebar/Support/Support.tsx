import styles from "./Support.module.scss";
import { classNames } from "../../../helpers/classNames/classNames";
import { Icon } from "../../UI/Icon/Icon";
import { ReactComponent as SupportIcon } from "../../../assets/icons/SupportIcon.svg";

interface SupportProps {
  className?: string;
}

export const Support = (props: SupportProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.SupportContainer, {}, [className])}>
      <Icon Svg={SupportIcon} className={styles.supportIcon} />
      <div className={styles.supportText}>Help</div>
    </div>
  );
};
