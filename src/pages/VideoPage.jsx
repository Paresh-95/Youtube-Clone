import { useState, useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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

  const { data } = useContext(VideoContext);

  const getRandomVideos = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const suggestedVideos = getRandomVideos(data, 10);

  const [videoStats] = useState({
    views: "100K",
    likes: "10K",
  });

  if (!videoData) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-6 min-h-screen">
      <div className="flex-1 lg:mr-6">
        <div className="w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&si=ZTx7F0xkyoJQAF3f`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full rounded-xl"
          ></iframe>
        </div>

        <div className="mt-4">
          <h1 className="text-xl md:text-2xl font-bold">{videoData.snippet.title}</h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <img
                src={videoData.snippet.thumbnails?.default?.url || "https://via.placeholder.com/48"}
                alt="Channel"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold text-sm sm:text-base">{videoData.snippet.channelTitle}</h3>
                <span className="text-xs sm:text-sm text-gray-600">
                  {videoData.statistics?.subscriberCount || "1M"} subscribers
                </span>
              </div>
              <button className="bg-black text-white px-2 py-1 text-xs sm:text-sm rounded-full hover:bg-gray-800">
                Join
              </button>
              <button className="bg-red-600 text-white px-3 py-1 text-xs sm:text-sm rounded-full hover:bg-red-700">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4 mt-2 sm:mt-0 text-sm">
              <span>{videoStats.views} views</span>
              <span>{videoStats.likes} likes</span>
            </div>
          </div>
          <div className="mt-4 text-gray-700 text-sm sm:text-base">
            <Markdown>
              {isExpanded ? videoData.snippet.description : `${videoData.snippet.description.slice(0, 150)}...`}
            </Markdown>
            {videoData.snippet.description.length > 150 && (
              <button className="text-blue-500 font-medium mt-2 text-sm" onClick={toggleReadMore}>
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>

        <div className="flex mt-6 lg:mt-10 flex-col items-center justify-center w-full min-h-[150px] bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">Comment Section Coming Soon!</h2>
          <p className="text-gray-600 text-center text-sm sm:text-base">
            We're working hard to bring you an amazing commenting experience. Stay tuned!
          </p>
        </div>
      </div>

      <div className="w-full lg:w-80 xl:w-96 mt-6 lg:mt-0">
        <h3 className="text-lg sm:text-xl font-bold mb-4">Related Videos</h3>
        {suggestedVideos.map((item, index) => (
          <Link
            key={index}
            to={`/watch/${item.id}`}
            state={{ videoData: item }}
            className="flex space-x-2 sm:space-x-4 mb-4"
          >
            <img
              src={item.snippet.thumbnails.high.url || "/placeholder.svg"}
              alt={item.snippet.title}
              className="w-32 sm:w-40 h-24 sm:h-28 rounded-lg object-cover"
            />
            <div className="flex-1">
              <strong className="line-clamp-2 text-sm sm:text-base">{item.snippet.title}</strong>
              <p className="text-xs text-gray-600 mt-1">{item.snippet.channelTitle}</p>
              <div className="flex gap-2">
                <p className="text-xs text-gray-600">{formatCount(item.statistics.viewCount)} views • </p>
                <p className="text-xs text-gray-600">{formatTimeAgo(item.snippet.publishedAt)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
