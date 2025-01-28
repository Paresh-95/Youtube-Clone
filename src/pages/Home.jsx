import React from "react"
import Feed from "../components/Feed"
import VideoContainer from "../components/VideoContainer"

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-shrink-0">
        <Feed />
      </div>
      <div className="flex-grow mt-2 overflow-y-auto scrollbar">
        <VideoContainer />
      </div>
    </div>
  )
}

export default Home

