import styles from "./VideoPlaylistItem.module.scss";
import { VideoDataProps } from "../../../assets/mockData/videosData/videoData";
import React from "react";
import { Iframe } from "../../UI/Iframe/Iframe";

interface VideoDetailContentProps {
  className?: string;
  video: VideoDataProps;
}

export const VideoPlaylistItem = (props: VideoDetailContentProps) => {
  const { className, video } = props;

  return (
    <div className={styles.videoDetailPlaylistContainer}>
      <Iframe
        videoUrl={video.url}
        className={styles.videoDetailPlaylistVideos}
      />
      <div className={styles.videoDetailPlaylistTitle}>Introduction</div>
    </div>
  );
};
