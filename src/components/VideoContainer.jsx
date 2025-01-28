import React, { useContext } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { VideoContext } from "../context/videoContext";

const VideoContainer = () => {
  const { data, channelImages, lastVideoElementRef, loading } = useContext(VideoContext);

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div
            key={item.id}
            ref={index === data.length - 1 ? lastVideoElementRef : null}
          >
            <Link 
              to={`/watch/${item.id}`}
              state={{ videoData: item }}  // Properly pass the full item object
            >
              <VideoCard
                item={item}
                channelImage={channelImages[item.snippet.channelId]}
              />
            </Link>
          </div>
        ))}
      </div>
      {loading && (
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default VideoContainer;