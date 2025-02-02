import React, { useState } from "react";
import Avatar from "react-avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchQuery}&key=${YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      navigate("/search", {
        state: {
          results: data.items,
          searchQuery: searchQuery,
        },
      });
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 md:px-5 bg-white shadow-md">
      {/* Left Section: Hamburger & Logo */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} >
          <GiHamburgerMenu size={20} />
        </button>
        <Link to="/">
          <img
            width={105}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
            alt="youtube-icon"
          />
        </Link>
      </div>

      {/* Search Section */}
      <form onSubmit={handleSearch} className="flex items-center w-full max-w-md">
        <div className="flex w-full bg-gray-100 rounded-full overflow-hidden border border-gray-400">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-4 rounded-l-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="py-2 px-4 bg-gray-200 rounded-r-full hover:bg-gray-300"
            disabled={loading}
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
            ) : (
              <CiSearch size={25} />
            )}
          </button>
        </div>
      </form>

      {/* Right Section: Create Button, Notifications, Avatar */}
      <div className="flex gap-5 items-center cursor-pointer">
        <button className="rounded-full px-3 py-1 border-2 border-gray-400 flex items-center gap-1 font-semibold">
          <LuPlus size={23} />
          Create
        </button>
        <IoIosNotifications size={30} />
        <Avatar
          className="border"
          src="https://yt3.ggpht.com/yti/ANjgQV81lYdKcAskInC-9JS7WWTveJDpzw_siR7xrFNTrT9fJZQW=s108-c-k-c0x00ffffff-no-rj"
          size={35}
          round={true}
        />
      </div>
    </div>
  );
};

export default Navbar;
