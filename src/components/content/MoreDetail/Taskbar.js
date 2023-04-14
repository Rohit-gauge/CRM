import React, { useState, useContext } from "react";
// import TaskDetails from "../taskactivities/TaskDetails";
import TaskList from "../taskactivities/TaskList/TaskList";
import ActivityList from "../taskactivities/ActivityList";
import NotesList from "../taskactivities/NotesList";
import Deals from "../taskactivities/Deals";
import Analytics from "../taskactivities/Analytics";


const Taskbar = () => {
  const [activeTab, setActiveTab] = useState("activities");
 
  const handleClick = (tab) => {
    if (tab === activeTab) {
      // If the clicked tab is already active, do nothing
      return;
    }
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col h-full lg:mx-14 mt-7">
      <div className="flex justify-between items-center  text-black py-4 px-4 ">
      
        <div className="flex ">
        
          <button
            onClick={() => handleClick("activities")}
            className={`lg:mr-8 mr-4 ${
              activeTab === "activities" ? "bg-blue-500" : ""
            } taskbar-btn`}
          >
            Activities
          </button>
          <button
            onClick={() => handleClick("task")}
            className={`lg:mr-8 mr-4 ${
              activeTab === "task" ? "bg-blue-500" : ""
            } taskbar-btn`}
          >
            Tasks
          </button>
          <button
            onClick={() => handleClick("notes")}
            className={`lg:mr-8 mr-4 ${activeTab === "notes" ? "bg-blue-500" : ""}  taskbar-btn`}
          >
            Notes
          </button>
          <button
            onClick={() => handleClick("deals")}
            className={`lg:mr-8 mr-4 ${activeTab === "deals" ? "bg-blue-500" : ""} taskbar-btn`}
          >
            Deals
          </button>
          <button
            onClick={() => handleClick("analytics")}
            className={`lg:mr-8 mr-4 ${activeTab === "analytics" ? "bg-blue-500" : ""} taskbar-btn`}
          >
           Analytics
          </button>
        </div>
      </div>
      <div className="flex-1 py-4">
        {activeTab === "activities" && <ActivityList />}
        {activeTab === "task" && <TaskList />}
        {activeTab === "notes" && <NotesList />}
        {activeTab === "deals" && <Deals />}
        {activeTab === "analytics" && <Analytics />}
      </div>
    </div>
  );
};

export default Taskbar;
