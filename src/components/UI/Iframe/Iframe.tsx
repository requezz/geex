import React from "react";

interface IframeProps {
  className?: string;
  videoUrl: string;
}

export const Iframe = (props: IframeProps) => {
  const { className, videoUrl } = props;

  return (
    <iframe
      src={videoUrl}
      title="Iframe Video Player"
      allowFullScreen
      className={className}
      allow="autoplay; encrypted-media"
    />
  );
};
