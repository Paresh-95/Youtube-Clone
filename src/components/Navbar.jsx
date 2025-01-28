import React from "react";
import Avatar from "react-avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Navbar = ({toggleSidebar}) => {
  return (
    <div className="flex justify-between mt-2 mr-10 ">
      <div className="flex flex-row gap-7 items-center cursor-pointer ">
       <div className="ml-3 bg-gray-300 rounded-full p-2 ">
       <GiHamburgerMenu size={20} onClick={toggleSidebar}   />
       </div>
        <Link to="/" ><img
          width={105}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
          alt="youtube-icon"
        /></Link>
      </div>
      <div className="flex w-[40%] items-center">
        <div className="w-[70%] py-2 px-5 border-2 border-r-0 border-gray-400 items-start rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-[100%]"
          />
        </div>
        <div className="flex gap-4 items-center">
          <div className="rounded-r-full border-2 py-2  border-gray-400 px-4">
            <button className="flex items-center">
              <CiSearch size={25}  />
            </button>
          </div>
          <div className="border-2 border-gray-400 bg-border-gray-400 rounded-full py-2 px-2 cursor-pointer">
            <FaMicrophone size={18}  />
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center cursor-pointer ">
        <button className="rounded-full px-3 py-1 border-2 border-gray-400  ">
          <div className="flex items-center gap-1 font-semibold">
            <LuPlus size={23} />
            Create
          </div>
        </button>
        <IoIosNotifications size={30} />
        <Avatar
          className="border "
          src="https://yt3.ggpht.com/yti/ANjgQV81lYdKcAskInC-9JS7WWTveJDpzw_siR7xrFNTrT9fJZQW=s108-c-k-c0x00ffffff-no-rj"
          size={35}
          round={true}
        />
      </div>
    </div>
  );
};

export default Navbar;
