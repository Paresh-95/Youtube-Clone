import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Shorts from "./pages/Shorts";
import Subscriptions from "./pages/Subscriptions";
import History from "./pages/You/History";
import Playlist from "./pages/You/Playlist";
import YourVideos from "./pages/You/YourVideo";
import WatchLater from "./pages/You/WatchLater";
import Explore from "./pages/Explore";
import Settings from "./pages/Settings";
import Feedback from "./pages/Feedback";
import LikedVideos from "./pages/You/LikedVideos";
import Help from "./pages/Help";
import YourCourse from "./pages/You/YourCourse";

function App() {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className="mx-5 my-2">
      <Navbar toggleSidebar={() => setOpenSidebar(!openSidebar)} />
      <div className="flex mt-5">
        <div className={`${openSidebar ? "w-56 ":"w-16 "}`}>
          <Sidebar openSidebar={openSidebar} />
        </div>

        {/* Main Content */}
        <div className={`flex-1 ml-14`}>
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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
