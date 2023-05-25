import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiOutlineMail, HiOutlineChatAlt2 } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import Call from "../subTask/Call";
import Email from "../subTask/Email";
import Meeting from "../subTask/Meeting/Meeting";
import Sms from "../subTask/Sms";
import Chat from "../subTask/Chat";
import AllData from "../subTask/AllData";

const ActivityList = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleClick = (tab) => {
    if (tab === activeTab) {
      // If the clicked tab is already active, do nothing
      return;
    }
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex md:justify-between justify-center items-center   text-black py-1 ">
        <div className="flex  ">
          <div className="flex md:mr-2">
            <button
              onClick={() => handleClick("all")}
              className={`${
                activeTab === "all" ? "bg-gray-500 text-white" : ""
              } task-list-btn`}
            >
              All
            </button>
          </div>
          <div className="flex md:mr-2">
            <button
              onClick={() => handleClick("call")}
              className={`${
                activeTab === "call" ? "bg-gray-500 text-white" : ""
              } task-list-btn`}
            >
              <IoMdCall className="md:mr-2 color-text-list" size={20} />
              <span className="color-text-list hidden md:inline  font-normal text-base">
                Call
              </span>
            </button>
          </div>
          <div className="flex md:mr-2">
            <button
              onClick={() => handleClick("email")}
              className={`${
                activeTab === "email" ? "bg-gray-500 text-white" : ""
              } task-list-btn`}
            >
              <HiOutlineMail className="md:mr-2 color-text-list" size={20} />
              <span className="color-text-list hidden md:inline  font-normal text-base">
                Email
              </span>
            </button>
          </div>
          <div className="flex md:mr-2">
            <button
              onClick={() => handleClick("sms")}
              className={`${
                activeTab === "sms" ? "bg-gray-500 text-white" : ""
              } task-list-btn`}
            >
              <HiOutlineChatAlt2
                className="md:mr-2 color-text-list"
                size={20}
              />
              <span className="color-text-list font-normal hidden md:inline  text-base">
                SMS
              </span>
            </button>
          </div>
          <div className="flex md:mr-2">
            <button
              onClick={() => handleClick("meeting")}
              className={`${
                activeTab === "meeting" ? "bg-gray-500 text-white" : ""
              } task-list-btn`}
            >
              <FaVideo className="md:mr-2 color-text-list" size={20} />
              <span className="color-text-list hidden md:inline  font-normal text-base">
                Meeting
              </span>
            </button>
          </div>
          <div className="flex md:mr-2">
            <button
              onClick={() => handleClick("chat")}
              className={`${
                activeTab === "chat" ? "bg-gray-500 text-white" : ""
              } task-list-btn`}
            >
              <BsFillChatDotsFill
                className="md:mr-2 color-text-list"
                size={20}
              />
              <span className="color-text-list font-normal hidden md:inline  text-base">
                Chat
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-2">
        {activeTab === "all" && <AllData />}
        {activeTab === "call" && <Call />}
        {activeTab === "email" && <Email />}
        {activeTab === "sms" && <Sms />}
        {activeTab === "meeting" && <Meeting />}
        {activeTab === "chat" && <Chat />}
      </div>
    </div>
  );
};

export default ActivityList;
