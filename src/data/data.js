import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import {
  IoFlameOutline,
  IoMusicalNotesOutline,
  IoFilmOutline,
  IoRadioOutline,
  IoGameControllerOutline,
  IoNewspaperOutline,
  IoTrophyOutline,
  IoSchoolOutline,
  IoShirtOutline,
  IoMicOutline,
  IoGridOutline,
} from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineFeedback } from "react-icons/md";
export const SidebarItems = [
  {
    title: "Home",
    icon: <GoHome size={23} />,
    link: "/",
  },
  {
    title: "Shorts",
    icon: <SiYoutubeshorts size={23} />,
    link: "/shorts",
  },
  {
    title: "Subscriptions",
    icon: <MdOutlineSubscriptions size={23} />,
    link: "/subscriptions",
  },
];

export const yourItems = [
  {
    title: "History",
    icon: <FaHistory size={21} />,
    link: "/history",
  },
  {
    title: "Playlist",
    icon: <MdOutlinePlaylistPlay size={25} />,
    link: "/playlist",
  },
  {
    title: "Your Videos",
    icon: <GoVideo size={22} />,
    link: "/your-videos",
  },
  {
    title: "Your courses",
    icon: <MdPlaylistAddCheckCircle size={25} />,
    link: "/your-courses",
  },
  {
    title: "Watch Later",
    icon: <MdOutlineWatchLater size={25} />,
    link: "/watch-later",
  },
  {
    title: "Liked videos",
    icon: <AiTwotoneLike size={25} />,
    link: "/liked-videos",
  },
];

export const exploreItems = [
  {
    title: "Trending",
    icon: <IoFlameOutline size={23} />,
    link: "/trending",
  },
  {
    title: "Shopping",
    icon: <FiShoppingBag size={23} />,
    link: "/shopping",
  },
  {
    title: "Music",
    icon: <IoMusicalNotesOutline size={23} />,
    link: "/music",
  },
  {
    title: "Films",
    icon: <IoFilmOutline size={23} />,
    link: "/films",
  },
  {
    title: "Live",
    icon: <IoRadioOutline size={23} />,
    link: "/live",
  },
  {
    title: "Gaming",
    icon: <IoGameControllerOutline size={23} />,
    link: "/gaming",
  },
  {
    title: "News",
    icon: <IoNewspaperOutline size={23} />,
    link: "/news",
  },
  {
    title: "Sport",
    icon: <IoTrophyOutline size={23} />,
    link: "/sport",
  },
  {
    title: "Courses",
    icon: <IoSchoolOutline size={23} />,
    link: "/courses",
  },
  {
    title: "Fashion & beauty",
    icon: <IoShirtOutline size={23} />,
    link: "/fashion-and-beauty",
  },
  {
    title: "Podcasts",
    icon: <IoMicOutline size={23} />,
    link: "/podcasts",
  },
  {
    title: "Playables",
    icon: <IoGridOutline size={23} />,
    link: "/playables",
  },
];

export const googleApps = [
  {
    title: "Youtube Premium",
    icon: <FaYoutube size={23} />,
    link: "/youtube-premium",
  },
  {
    title: "Youtube Studio",
    icon: <SiYoutubestudio size={23} />,
    link: "/youtube-studio",
  },
  {
    title: "Youtube Music",
    icon: <SiYoutubemusic size={23} />,
    link: "/youtube-music",
  },
  {
    title: "Youtube Kids",
    icon: <SiYoutubekids size={23} />,
    link: "/youtube-kids",
  },
];

export const settings = [
  {
    title: "Settings",
    icon: <IoMdSettings size={23} />,
    link: "/settings",
  },
  {
    title: "Report history",
    icon: <FaFontAwesomeFlag size={23} />,
    link: "/report-history",
  },
  {
    title: "Help",
    icon: <FaRegCircleQuestion size={23} />,
    link: "/help",
  },
  {
    title: "Send feedback",
    icon: <MdOutlineFeedback size={23} />,
    link: "/send-feedback",
  },
];

export const btnFeed = [
  { title: "All", link: "/feed/all" },
  { title: "Javascript", link: "/feed/javascript" },
  { title: "Antique cars", link: "/feed/antique-cars" },
  { title: "Test drives", link: "/feed/test-drives" },
  { title: "Gaming", link: "/feed/gaming" },
  { title: "Peter Griffin", link: "/feed/peter-griffin" },
  { title: "Computer files", link: "/feed/computer-files" },
  { title: "Trillers", link: "/feed/trillers" },
  { title: "Science fiction", link: "/feed/science-fiction" },
  { title: "Trucks", link: "/feed/trucks" },
  { title: "Automobile", link: "/feed/automobile" },
  { title: "Repair shops", link: "/feed/repair-shops" },
];
