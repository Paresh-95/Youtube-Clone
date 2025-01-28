import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { VideoContext } from "../context/videoContext";
import formatCount from "../lib/format-likeCount";
import formatTimeAgo from "../lib/format-time";
import Markdown from "react-markdown";

const VideoPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  const videoData = location.state?.videoData;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const { data, lastVideoElementRef, loading } = useContext(VideoContext);

  const getRandomVideos = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const suggestedVideos = getRandomVideos(data, 10);

  console.log("suggestedData: ", suggestedVideos);

  const [videoStats, setVideoStats] = useState({
    views: "100K",
    likes: "10K",
  });

  const [comments] = useState([
    { user: "User 1", text: "Great video!" },
    { user: "User 2", text: "Very informative content" },
    { user: "User 3", text: "Thanks for sharing!" },
  ]);

  const [relatedVideos] = useState([
    {
      thumbnail:
        videoData?.snippet?.thumbnails?.medium?.url ||
        "https://via.placeholder.com/160x90",
      title: "Related Video 1",
      channel: "Channel 1",
      views: "50K",
    },
    {
      thumbnail:
        videoData?.snippet?.thumbnails?.medium?.url ||
        "https://via.placeholder.com/160x90",
      title: "Related Video 2",
      channel: "Channel 2",
      views: "30K",
    },
    {
      thumbnail:
        videoData?.snippet?.thumbnails?.medium?.url ||
        "https://via.placeholder.com/160x90",
      title: "Related Video 3",
      channel: "Channel 3",
      views: "20K",
    },
  ]);

  if (!videoData) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row p-6 min-h-screen">
      <div className="flex-1 lg:mr-6">
        <div className="w-full aspect-video">
          <iframe
            width="1100"
            height="650"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&si=ZTx7F0xkyoJQAF3f`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>

        <div className="mt-4">
          <h1 className="text-2xl font-bold">{videoData.snippet.title}</h1>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <img
                src={
                  videoData.snippet.thumbnails?.default?.url ||
                  "https://via.placeholder.com/48"
                }
                alt="Channel"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">{videoData.snippet.channelTitle}</h3>
                <span className="text-sm text-gray-600">
                  {videoData.statistics?.subscriberCount || "1M"} subscribers
                </span>
              </div>
              <button className="bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800">
                Join
              </button>
              <button className="bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-700">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4 mt-2 mr-10 lg:mt-0">
              <span>{videoStats.views} views</span>
              <span>{videoStats.likes} likes</span>
            </div>
          </div>
          <div className="mt-4 text-gray-700">
            <p>
              <Markdown>
                {isExpanded
                  ? videoData.snippet.description
                  : `${videoData.snippet.description.slice(0, 150)}...`}
              </Markdown>
            </p>
            {videoData.snippet.description.length > 150 && (
              <button
                className="text-blue-500 font-medium mt-2"
                onClick={toggleReadMore}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>

        <div className="flex mt-10 flex-col items-center justify-center w-[1100px] min-h-[200px] bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Comment Section Coming Soon!
          </h2>
          <p className="text-gray-600 text-center">
            We're working hard to bring you an amazing commenting experience.
            Stay tuned!
          </p>
        </div>
      </div>

      <div className="w-full lg:w-96 mt-8 lg:mt-0">
        <h3 className="text-xl font-bold mb-4">Related Videos</h3>
        {suggestedVideos.map((item, index) => (
          <div key={index} className="flex space-x-4 mb-4">
            <img
              src={item.snippet.thumbnails.high.url}
              alt={item.snippet.title}
              className="w-40 h-28 rounded-lg object-cover"
            />
            <div>
              <strong className="line-clamp-2 ">{item.snippet.title}</strong>
              <p className="text-xs text-gray-600 mt-1">
                {item.snippet.channelTitle}
              </p>
              <div className="flex gap-2">
                <p className="text-xs text-gray-600">
                  {formatCount(item.statistics.viewCount)} views •{" "}
                </p>
                <p className="text-xs text-gray-600">
                  {formatTimeAgo(item.snippet.publishedAt)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
