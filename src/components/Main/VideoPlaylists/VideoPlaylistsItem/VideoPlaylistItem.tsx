import { classNames } from "../../../../helpers/classNames/classNames";
import styles from "./VideoPlaylistItem.module.scss";
import { Icon } from "../../../UI/Icon/Icon";
import { Iframe } from "../../../UI/Iframe/Iframe";
import { VideoDataProps } from "../../../../assets/mockData/videosData/videoData";
import { ReactComponent as CoinIcon } from "../../../../assets/icons/CoinIcon.svg";
import { ReactComponent as EducationIcon } from "../../../../assets/icons/EducationIcon.svg";

interface VideoPlaylistItemProps {
  className?: string;
  video: VideoDataProps;
}

export const VideoPlaylistItem = (props: VideoPlaylistItemProps) => {
  const { className, video } = props;

  return (
    <div className={classNames(styles.VideoPlaylist, {}, [className])}>
      <div className={styles.videoTitle}>{video.title}</div>
      <div className={styles.rectangleBlock}>
        <Icon Svg={CoinIcon} className={styles.rectangleIcon} />
        <div className={styles.rectangleText}>{video.price}</div>
      </div>
      <div className={styles.educationBlock}>
        <Icon Svg={EducationIcon} className={styles.educationIcon} />
      </div>
      <Iframe videoUrl={video.url} className={styles.mainListVideos} />
    </div>
  );
};
