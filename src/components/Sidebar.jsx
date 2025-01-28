import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import {
  SidebarItems,
  googleApps,
  exploreItems,
  settings,
  yourItems,
} from "../data/data";

const Sidebar = ({ openSidebar }) => {
  return (
    <div className="py-2">
      <div>
        {SidebarItems.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            className={({ isActive }) =>
              `flex gap-5 my-2 items-center ${
                isActive
                  ? "bg-gray-200 py-2 px-2 mx-2 rounded-xl font-bold"
                  : "hover:bg-gray-100 py-2 px-2 mx-2 rounded-xl"
              }`
            }
          >
            {item.icon}
            <p className={`${!openSidebar ? "hidden" : ""}`}>{item.title}</p>
          </NavLink>
        ))}
      </div>
      <hr className="my-2" />
      {openSidebar && (
        <div>
          <div>
            <div className="px-4">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">You</h3>
                <FaGreaterThan size={12} />
              </div>
              <div>
                {yourItems.map((item, index) => (
                  <NavLink
                    to={item.link}
                    key={index}
                    className={({ isActive }) =>
                      `flex gap-5 my-2 items-center ${
                        isActive
                          ? "bg-gray-200 py-2 px-2 rounded-xl font-bold"
                          : "hover:bg-gray-100 py-2 px-2 rounded-xl"
                      }`
                    }
                  >
                    {item.icon}
                    <p>{item.title}</p>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <hr className="my-2" />
          <div>
            <div className="px-4">
              <h3 className="font-semibold">Subscriptions</h3>
              <div className="h-36">{/* All Subscriptions from API */}</div>
            </div>
          </div>
          <hr className="my-2" />
          <div>
            <div className="px-4">
              <h3 className="font-semibold">Explore</h3>
              <div>
                {exploreItems.map((item, index) => (
                  <NavLink
                    to={item.link}
                    key={index}
                    className={({ isActive }) =>
                      `flex gap-5 my-2 items-center ${
                        isActive
                          ? "bg-gray-200 py-2 px-2 rounded-xl font-bold"
                          : "hover:bg-gray-100 py-2 px-2 rounded-xl"
                      }`
                    }
                  >
                    {item.icon}
                    <p>{item.title}</p>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <hr className="my-2" />
          <div>
            <div className="px-4">
              <h3 className="font-semibold">More from YouTube</h3>
              <div>
                {googleApps.map((item, index) => (
                  <NavLink
                    to={item.link}
                    key={index}
                    className={({ isActive }) =>
                      `flex gap-5 my-2 items-center ${
                        isActive
                          ? "bg-gray-200 py-2 px-2 rounded-xl font-bold"
                          : "hover:bg-gray-100 py-2 px-2 rounded-xl"
                      }`
                    }
                  >
                    {item.icon}
                    <p>{item.title}</p>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <hr className="my-2" />
          <div>
            <div className="px-4">
              <div>
                {settings.map((item, index) => (
                  <NavLink
                    to={item.link}
                    key={index}
                    className={({ isActive }) =>
                      `flex gap-5 my-2 items-center ${
                        isActive
                          ? "bg-gray-200 py-2 px-2 rounded-xl font-bold"
                          : "hover:bg-gray-100 py-2 px-2 rounded-xl"
                      }`
                    }
                  >
                    {item.icon}
                    <p>{item.title}</p>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
