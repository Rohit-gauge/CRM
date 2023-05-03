import React, { useState } from "react";
import AllTask from "./AllTask";
import OngoingTask from "./OngoingTask";
import Completedtask from "./Completedtask";

const TaskList = () => {
  const [activeTab, setActiveTab] = useState("alltask");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col h-full ">
      <div className="flex justify-between items-center  text-black  px-6 ">
        <div className="flex">
          <button
            onClick={() => handleClick("alltask")}
            className={`mr-2  ${
              activeTab === "alltask" ? "bg-gray-500 text-white" : ""
            } task-list-btn`}
          >
            <span className="color-text-list font-normal text-base">All</span>
          </button>
          <button
            onClick={() => handleClick("ongoingtask")}
            className={`mr-2  ${
              activeTab === "ongoingtask" ? "bg-gray-500 text-white" : ""
            } task-list-btn`}
          >
            <span className="color-text-list font-normal text-base">
              Ongoing
            </span>
          </button>
          <button
            onClick={() => handleClick("completedtask")}
            className={`mr-2  ${
              activeTab === "completedtask" ? "bg-gray-500 text-white" : ""
            } task-list-btn`}
          >
            <span className="color-text-list font-normal text-base">Completed</span>
          </button>
        </div>
      </div>
      <div className="flex-1 py-4">
        {activeTab === "alltask" && <AllTask />}
        {activeTab === "ongoingtask" && <OngoingTask />}
        {activeTab === "completedtask" && <Completedtask />}
      </div>
    </div>
  );
};

export default TaskList;
