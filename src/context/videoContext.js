import { createContext } from "react";
import react,{useState,useEffect,useRef,useCallback} from "react";
import axios from "axios";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [channelImages, setChannelImages] = useState({});
  const [pageToken, setPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const initialFetchDone = useRef(false);

  const fetchVideos = useCallback(
    async (nextPageToken = "") => {
      if (loading) return;
      setLoading(true);

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_YOUTUBE_VIDEO_URL}${process.env.REACT_APP_YOUTUBE_API_KEY}&pageToken=${nextPageToken}`
        );
        const videos = response.data.items;
        setData((prevData) => [...prevData, ...videos]);
        setPageToken(response.data.nextPageToken || null);

        const channelIds = videos.map((video) => video.snippet.channelId);
        fetchChannelImages(channelIds);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    },
    [loading]
  ); 

  const fetchChannelImages = useCallback(async (channelIds) => {
    try {
      const CHANNEL_API_URL = `${process.env.REACT_APP_CHANNEL_API_URL}${process.env.REACT_APP_YOUTUBE_API_KEY}&id=`;
      const response = await axios.get(CHANNEL_API_URL + channelIds.join(","));
      const channels = response.data.items;

      const images = {};
      channels.forEach((channel) => {
        images[channel.id] = channel.snippet.thumbnails.default.url;
      });

      setChannelImages((prevImages) => ({ ...prevImages, ...images }));
    } catch (error) {
      console.error("Error fetching channel images:", error);
    }
  }, []);

  const lastVideoElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pageToken) {
          fetchVideos(pageToken);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, pageToken, fetchVideos]
  );

  useEffect(() => {
    if (!initialFetchDone.current) {
      fetchVideos();
      initialFetchDone.current = true;
    }
  }, [fetchVideos]);

  return <VideoContext.Provider value={{data,channelImages,lastVideoElementRef,loading}}>{children}</VideoContext.Provider>;
};
