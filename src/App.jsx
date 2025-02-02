import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Shorts from "./pages/Shorts"
import Subscriptions from "./pages/Subscriptions"
import History from "./pages/You/History"
import Playlist from "./pages/You/Playlist"
import YourVideos from "./pages/You/YourVideo"
import WatchLater from "./pages/You/WatchLater"
import Explore from "./pages/Explore"
import Settings from "./pages/Settings"
import Feedback from "./pages/Feedback"
import LikedVideos from "./pages/You/LikedVideos"
import Help from "./pages/Help"
import YourCourse from "./pages/You/YourCourse"
import VideoPage from "./pages/VideoPage"
import UnderDevlopment from "./components/UnderDevlopment"
import SearchResults from "./components/SearchResult"

function App() {
  const [openSidebar, setOpenSidebar] = useState(true)

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex-shrink-0">
        <Navbar toggleSidebar={() => setOpenSidebar(!openSidebar)} />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div
          className={`fixed top-[56px] left-0 h-[calc(100vh-56px)] bg-white transition-all duration-300 ${
            openSidebar ? "w-60" : "w-20"
          } z-40`}
        >
          <div className="h-full overflow-y-auto thin-scrollbar">
            <Sidebar openSidebar={openSidebar} />
          </div>
        </div>

        <div className={`flex-1 transition-all duration-300 overflow-hidden ${openSidebar ? "ml-60" : "ml-20"}`}>
          <div className="h-[calc(100vh-56px)] px-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/history" element={<History />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/your-videos" element={<YourVideos />} />
              <Route path="/your-courses" element={<YourCourse />} />
              <Route path="/watch-later" element={<WatchLater />} />
              <Route path="/liked-videos" element={<LikedVideos />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/help" element={<Help />} />
              <Route path="/watch/:id" element={<VideoPage />} />
              <Route path="*" element={<UnderDevlopment />} />
              <Route path="/search" element={<SearchResults />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

