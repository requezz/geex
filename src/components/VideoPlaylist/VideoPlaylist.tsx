import styles from "./VideoPlaylist.module.scss";
import { classNames } from "../../helpers/classNames/classNames";
import { videoData } from "../../assets/mockData/videosData/videoData";
import { VideoPlaylistItem } from "./VideoDetailPlaylist/VideoPlaylistItem";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { useParams } from "react-router-dom";

interface VideoDetailProps {
  className?: string;
}

export const VideoPlaylist = (props: VideoDetailProps) => {
  const { className } = props;

  const { id } = useParams(); // Получаем id из URL

  const currentPlaylist =
    id === "1" ? videoData[0].newPlaylist : videoData[1].trending;

  return (
    <div className={classNames(styles.VideoDetail, {}, [className])}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {currentPlaylist?.map((video) => (
          <div>
            <SwiperSlide key={video.id}>
              <VideoPlaylistItem video={video} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
