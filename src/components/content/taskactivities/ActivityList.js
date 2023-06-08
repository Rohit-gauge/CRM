import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import {
  HiOutlineMail,
  HiOutlineChatAlt2,
  HiFolderOpen,
  HiDocumentText,
} from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import Call from "../subTask/Call";
import Email from "../subTask/Email";
import Meeting from "../subTask/Meeting/Meeting";
import Sms from "../subTask/Sms";
import Chat from "../subTask/Chat";
import AllData from "../subTask/AllData";
import SmsModal from "../MoreDetail/ModalsAction/SmsModal";
import EmailModal from "../MoreDetail/ModalsAction/EmailModal";
import MeetingModal from "../MoreDetail/ModalsAction/MeetingModal";
import TaskModal from "../MoreDetail/ModalsAction/TaskModal";
import CallModal from "../MoreDetail/ModalsAction/CallModal";
import NotesModal from "../MoreDetail/ModalsAction/NotesModal";

const ActivityList = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isNoteModalVisible, setIsNoteModalVisible] = useState(false);
  const [isCallModalVisible, setIsCallModalVisible] = useState(false);
  const [isTaskModalVisible, setIsTaskModalVisible] = useState(false);
  const [isMeetModalVisible, setIsMeetModalVisible] = useState(false);
  const [isEmailModalVisible, setIsEmailModalVisible] = useState(false);

  const [isSMSModalVisible, setIsSMSModalVisible] = useState(false);

  const showNoteModal = () => {
    setIsNoteModalVisible(true);
  };

  const showCallModal = () => {
    setIsCallModalVisible(true);
  };
  const showTaskModal = () => {
    setIsTaskModalVisible(true);
  };
  const showMeetModal = () => {
    setIsMeetModalVisible(true);
  };
  const showEmailModal = () => {
    setIsEmailModalVisible(true);
  };

  const showSMSModal = () => {
    setIsSMSModalVisible(true);
  };

  const handleNoteModalCancel = () => {
    setIsNoteModalVisible(false);
  };
  const handleCallModalCancel = () => {
    setIsCallModalVisible(false);
  };
  const handleTaskModalCancel = () => {
    setIsTaskModalVisible(false);
  };
  const handleMeetModalCancel = () => {
    setIsMeetModalVisible(false);
  };
  const handleEmailModalCancel = () => {
    setIsEmailModalVisible(false);
  };

  const handleSMSModalCancel = () => {
    setIsSMSModalVisible(false);
  };

  const handleClick = (tab) => {
    if (tab === activeTab) {
      // If the clicked tab is already active, do nothing
      return;
    }
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex md:justify-between justify-center items-center   text-black  ">
          {/* <div className="flex  ">
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
        </div> */}

          <div className="contact-btn-wrap lg:px-6 px-2 pb-4  flex flex-wrap justify-center sm:justify-start space-x-2">
            <button
              onClick={showCallModal}
              className="mt-1 md:mx-auto flex text-blue-400 font-bold  text-sm lg:py-2 lg:px-2 border p-1 px-2 border-blue-700 rounded  "
            >
              <IoMdCall className="mr-2 " size={20} />
              <span className=" font-normal text-base">Call</span>
            </button>
            <button
              onClick={showEmailModal}
              className="mt-1 md:mx-auto flex text-blue-400 font-bold  text-sm lg:py-2 lg:px-2 border p-1 px-2 border-blue-700 rounded "
            >
              <HiOutlineMail className="mr-2 " size={20} />
              <span className="font-normal text-base">Email</span>
            </button>
            <button
              onClick={showSMSModal}
              className="mt-1 md:mx-auto flex text-blue-400 font-bold  text-sm lg:py-2 lg:px-2 border p-1 px-2 border-blue-700 rounded "
            >
              <HiOutlineChatAlt2 className="mr-1 " size={20} />
              <span className=" font-normal text-base">SMS</span>
            </button>
            <button
              onClick={showMeetModal}
              className="mt-1 md:mx-auto flex text-blue-400 font-bold  text-sm lg:py-2 lg:px-2 border p-1 px-2 border-blue-700 rounded "
            >
              <FaVideo className="mr-2 " size={21} />
              <span className=" font-normal text-base">Meeting</span>
            </button>
            {/* <button
              className="contact-btn flex items-center bg-6192FF rounded-md px-2 py-2"
              onClick={showNoteModal}
            >
              <div className="text-white font-normal text-base">
                <HiDocumentText className="mr-1" />
              </div>
              <span className="text-white font-normal text-base">Notes</span>
            </button> */}

            <button
                onClick={showNoteModal}
                className="mt-1 md:mx-auto flex text-blue-400 font-bold  text-sm lg:py-2 lg:px-2 border p-1 px-2 border-blue-700 rounded "
              >
                <div className=" font-normal text-base mt-1">
                <HiDocumentText className="mr-1" />
              </div>
              <span className=" font-normal text-base">Notes</span>
              </button>



            <button
              onClick={showTaskModal}
              className="mt-1 md:mx-auto flex text-blue-400 font-bold  text-sm lg:py-2 lg:px-2 border p-1 px-2 border-blue-700 rounded "
            >
              <HiFolderOpen className="mr-1 " size={20} />
              <span className=" font-normal text-base">Task</span>
            </button>
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

      <NotesModal
        visible={isNoteModalVisible}
        onCancel={handleNoteModalCancel}
      />
      <CallModal
        visible={isCallModalVisible}
        onCancel={handleCallModalCancel}
      />
      <TaskModal
        visible={isTaskModalVisible}
        onCancel={handleTaskModalCancel}
      />
      <MeetingModal
        visible={isMeetModalVisible}
        onCancel={handleMeetModalCancel}
      />
      <EmailModal
        visible={isEmailModalVisible}
        onCancel={handleEmailModalCancel}
      />
      <SmsModal visible={isSMSModalVisible} onCancel={handleSMSModalCancel} />
    </>
  );
};

export default ActivityList;
