import React from "react";
import formatDuration from "../lib/format-duration";
import formatCount from "../lib/format-likeCount";
import formatTimeAgo from "../lib/format-time";

const VideoCard = ({ item, channelImage }) => {
  return (
    <div className="w-full max-w-[380px] overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={item.snippet.thumbnails.high.url}
          alt={item.snippet.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 rounded bg-black/90 px-1 py-0.5 text-xs text-white">
          {formatDuration(item.contentDetails.duration)}
        </div>
      </div>
      <div className="flex gap-3 p-3">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
            <img
              src={channelImage} 
              alt="Channel avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
            {item.snippet.title}
          </h3>
          <div className="mt-1 text-sm text-gray-600">
            <div>{item.snippet.channelTitle}</div>
            <div className="flex items-center gap-1">
              <span>{formatCount(item.statistics.viewCount)} views</span>
              <span className="text-[4px]">●</span>
              <span>{formatTimeAgo(item.snippet.publishedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
