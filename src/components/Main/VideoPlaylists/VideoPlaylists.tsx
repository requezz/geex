import styles from "./VideoPlaylists.module.scss";
import { Icon } from "../../UI/Icon/Icon";
import { videoData } from "../../../assets/mockData/videosData/videoData";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/ArrowRightIcon.svg";
import { VideoPlaylistItem } from "./VideoPlaylistsItem/VideoPlaylistItem";
import { Link } from "react-router-dom";

interface VideoPlaylistProps {
  className?: string;
}

export const VideoPlaylists = (props: VideoPlaylistProps) => {
  const { className } = props;

  return (
    <div className={styles.VideoPlaylistsContainer}>
      <div className={styles.seeAllCommonBlock}>
        <div className={styles.newPlaylistText}>New Playlist</div>

        <div className={styles.seeAllBlock}>
          See All <Icon Svg={ArrowRightIcon} className={styles.seeAllIcon} />
        </div>
      </div>

      <div className={styles.newPlaylist}>
        <Link to="/playlist/1">
          {videoData[0].newPlaylist?.map((video) => (
            <VideoPlaylistItem video={video} />
          ))}
        </Link>
      </div>

      <div className={styles.seeAllCommonBlock}>
        <div className={styles.trendingText}>Trending</div>

        <div className={styles.seeAllBlockTrending}>
          See All <Icon Svg={ArrowRightIcon} className={styles.seeAllIcon} />
        </div>
      </div>

      <div className={styles.trending}>
        <Link to="/playlist/2">
          {videoData[1].trending?.map((video) => (
            <VideoPlaylistItem video={video} />
          ))}
        </Link>
      </div>
    </div>
  );
};
