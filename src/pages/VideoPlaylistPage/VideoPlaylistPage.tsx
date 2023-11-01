import React from "react";
import styles from "./VideoDetailPage.module.scss";
import { classNames } from "../../helpers/classNames/classNames";
import { Route, Routes } from "react-router-dom";
import { VideoPlaylist } from "../../components/VideoPlaylist/VideoPlaylist";

interface VideoDetailPageProps {
  className?: string;
}

export const VideoPlaylistPage = (props: VideoDetailPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.VideoPlaylistPage, {}, [className])}>
      <Routes>
        <Route path="/playlist/:id" element={<VideoPlaylist />} />
      </Routes>
    </div>
  );
};
