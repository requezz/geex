import { ReactComponent as CoinIcon } from "../../icons/CoinIcon.svg";
import { ReactComponent as EducationIcon } from "../../icons/CoinIcon.svg";
import React from "react";

export type VideoDataCommonProps = {
  id: string;
  newPlaylist?: VideoDataProps[];
  trending?: VideoDataProps[];
};

export type VideoDataProps = {
  id: string;
  title: string;
  price: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  educationIcon: React.VFC<React.SVGProps<SVGSVGElement>>;
  url: string;
};

export const videoData: VideoDataCommonProps[] = [
  {
    id: "1",
    newPlaylist: [
      {
        id: "1",
        title: "Fundamentals of investment",
        price: "Earn 2T",
        icon: CoinIcon,
        educationIcon: EducationIcon,
        url: "/videos/IMG_1564.MP4",
      },
      {
        id: "2",
        title: "Fundamentals of investment",
        price: "Earn 2T",
        icon: CoinIcon,
        educationIcon: EducationIcon,
        url: "/videos/IMG_1565.MP4",
      },
      {
        id: "3",
        title: "Fundamentals of investment",
        price: "Earn 2T",
        icon: CoinIcon,
        educationIcon: EducationIcon,
        url: "/videos/IMG_1566.MP4",
      },
      {
        id: "4",
        title: "Fundamentals of investment",
        price: "Earn 2T",
        icon: CoinIcon,
        educationIcon: EducationIcon,
        url: "/videos/IMG_1567.MP4",
      },
    ],
  },
  {
    id: "2",
    trending: [
      {
        id: "1",
        title: "Fundamentals of investment",
        price: "Earn 2T",
        icon: CoinIcon,
        educationIcon: EducationIcon,
        url: "/videos/IMG_1568.MP4",
      },
      {
        id: "2",
        title: "Fundamentals of investment",
        price: "Earn 2T",
        icon: CoinIcon,
        educationIcon: EducationIcon,
        url: "/videos/IMG_1569.MP4",
      },
      {
        id: "3",
        title: "Fundamentals of investment",
        price: "Earn 2T",
        icon: CoinIcon,
        educationIcon: EducationIcon,
        url: "/videos/IMG_1570.MP4",
      },
      {
        id: "4",
        title: "Fundamentals of investment",
        price: "Earn 2T",
        icon: CoinIcon,
        educationIcon: EducationIcon,
        url: "/videos/IMG_1571.MP4",
      },
    ],
  },
];
