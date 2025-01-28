import React, { useState } from "react"
import { btnFeed } from "../data/data"

const Feed = () => {
  const [selected, setSelected] = useState(0)

  const handleSelection = (index) => {
    setSelected(index)
  }

  return (
    <div className="sticky top-0 bg-white z-10 ">
      <div className="flex gap-2 items-center overflow-x-auto py-2 px-4">
        {btnFeed.map((item, index) => {
          const isSelected = selected === index
          return (
            <button
              key={index}
              onClick={() => handleSelection(index)}
              className={`px-3 py-1 rounded-lg text-center border-2 whitespace-nowrap ${
                isSelected ? "bg-black text-white border-black" : "bg-gray-100 text-black border-gray-300"
              }`}
            >
              {item.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Feed

