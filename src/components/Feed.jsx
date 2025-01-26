import React, { useState } from "react";
import { btnFeed } from "../data/data";

const Feed = () => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (index) => {
    setSelected(index); // Set the selected button by index
  };

  return (
    <div>
      {/* Button Feed Section */}
      <div className="flex gap-2 w-[180vh] items-center overflow-x-scroll max-w-full py-2">
        {btnFeed.map((item, index) => {
          const isSelected = selected === index;
          return (
            <button
              key={index}
              onClick={() => handleSelection(index)} // Handle selection
              className={`px-4 py-2 rounded-lg text-center border-2 whitespace-nowrap ${
                isSelected
                  ? "bg-black text-white border-black"
                  : "bg-gray-100 text-black border-gray-300"
              }`}
            >
              {item.title} {/* Access the title property */}
            </button>
          );
        })}
      </div>

      {/* Feed Content Section */}
      <div className="mt-5">
        {selected !== null ? (
          <p className="text-lg font-semibold">
            Showing content for: <span className="text-black">{btnFeed[selected].title}</span>
          </p>
        ) : (
          <p className="text-lg text-gray-500">Select a category to see content.</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
