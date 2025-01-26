import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  SidebarItems,
  googleApps,
  exploreItems,
  settings,
  yourItems,
} from "../data/data";

const Sidebar = ({ openSidebar }) => {
  return (
    <div className="relative left-0 h-[calc(100vh-4.625rem)] bg-white overflow-scroll">
      <div>
        <div>
          {SidebarItems.map((item, index) => {
            return (
              <Link to={item.link} key={index}>
                <div className="flex gap-5 my-5 items-center">
                  {item.icon}
                  <p className={`${!openSidebar ? "hidden" : ""}`}>
                    {item.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <hr width="100%" size="2" className="p-2" />
      {openSidebar && (
        <div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">You</h3>
              <FaGreaterThan size={12} />
            </div>
            <div>
              {yourItems.map((item, index) => {
                return (
                  <Link to={item.link} key={index}>
                    <div className="flex gap-5 my-5 items-center">
                      {item.icon}
                      <p>{item.title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <hr width="100%" size="2" className="p-2" />
          <div>
            <div>
              <h3 className="font-semibold">Subscriptions</h3>
              <div className="h-36">{/* All Subscriptions from API */}</div>
            </div>
          </div>
          <hr width="100%" size="2" className="p-2" />
          <div>
            <div>
              <h3 className="font-semibold">Explore</h3>
              <div>
                {exploreItems.map((item, index) => {
                  return (
                    <Link to={item.link} key={index}>
                      <div className="flex gap-5 my-5 items-center">
                        {item.icon}
                        <p>{item.title}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <hr width="100%" size="2" className="p-2" />
          <div>
            <div>
              <h3 className="font-semibold">More from YouTube</h3>
              <div>
                {googleApps.map((item, index) => {
                  return (
                    <Link to={item.link} key={index}>
                      <div className="flex gap-5 my-5 items-center">
                        {item.icon}
                        <p>{item.title}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <hr width="100%" size="2" className="p-2" />
          <div>
            <div>
              <div>
                {settings.map((item, index) => {
                  return (
                    <Link to={item.link} key={index}>
                      <div className="flex gap-5 my-5 items-center">
                        {item.icon}
                        <p>{item.title}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
