import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const { results, searchQuery } = location.state || { results: [], searchQuery: '' };

  const slicedResults = results.slice(1);

  return (
    <div className="p-6 items-center flex flex-col">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {slicedResults.map((video) => (
          <Link
            key={video.id.videoId}
            to={`/watch/${video.id.videoId}`}
            state={{
              videoData: {
                id: video.id.videoId,
                snippet: video.snippet,
                statistics: {},
                contentDetails: {}
              }
            }}
            className="block"
          >
            <div className="flex flex-col gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <div className="relative">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-semibold line-clamp-2">
                  {video.snippet.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm text-gray-600">
                    {video.snippet.channelTitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <p>
                    {new Date(video.snippet.publishedAt).toLocaleDateString()}
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {video.snippet.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
