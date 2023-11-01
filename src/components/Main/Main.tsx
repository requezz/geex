import styles from "./Main.module.scss";
import { classNames } from "../../helpers/classNames/classNames";
import { VideoPlaylists } from "./VideoPlaylists/VideoPlaylists";

interface MainProps {
  className?: string;
}

export const Main = (props: MainProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.Main, {}, [className])}>
      <VideoPlaylists />
    </div>
  );
};
