import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import NotesModal from "./ModalsAction/NotesModal";
import {
  HiOutlineMail,
  HiOutlineChatAlt2,
  HiFolderOpen,
  HiDocumentText,
} from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import { Col, Row } from "antd";
import CallModal from "./ModalsAction/CallModal";
import TaskModal from "./ModalsAction/TaskModal";
import MeetingModal from "./ModalsAction/MeetingModal";
import EmailModal from "./ModalsAction/EmailModal";
import CreateDeal from "./ModalsAction/CreateDeal";

const Priority = ({ cardData }) => {
  const [isNoteModalVisible, setIsNoteModalVisible] = useState(false);
  const [isCallModalVisible, setIsCallModalVisible] = useState(false);
  const [isTaskModalVisible, setIsTaskModalVisible] = useState(false);
  const [isMeetModalVisible, setIsMeetModalVisible] = useState(false);
  const [isEmailModalVisible, setIsEmailModalVisible] = useState(false);
  const [isDealModalVisible, setIsDealModalVisible] = useState(false);

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
  const showDealModal = () => {
    setIsDealModalVisible(true);
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
  const handleDealModalCancel = () => {
    setIsDealModalVisible(false);
  };

  const getButtonStyle = (text) => {
    let buttonStyle = {
      backgroundColor: "#000000", // Default color
      color: "#FFFFFF", // Default text color
    };
    if (text === "Cold Lead") {
      buttonStyle.backgroundColor = "#C7FDBE";
      buttonStyle.color = "#2e8a2c";
    } else if (text === "Hot Lead") {
      buttonStyle.backgroundColor = "#FDC1BE";
      buttonStyle.color = "#8A3D2C";
    } else if (text === "Warm Lead") {
      buttonStyle.backgroundColor = "#FDD8BE";
      buttonStyle.color = "#8A4E2C";
    }
    return buttonStyle;
  };
  return (
    <>
      <div className="priority-wrap border-b-2 border-gray-300">
        <div className="flex lg:px-10 px-5 pt-7">
          <div className="lg:w-1/12 w-1/5 mt-2">
            <div className="card-img-wrap flex justify-center items-center ">
              <img
                className="card-image"
                src={cardData.image}
                alt={cardData.title}
              />
            </div>
          </div>
          <div className="w-full px-4  ">
            <h3 className="text-lg font-medium ">{cardData.title}</h3>
            <div className="mt-1">
              <button className="priority-btn mt">
                {" "}
                <span>
                  <AiOutlinePlus />
                </span>
                &nbsp;Set Priority
              </button>
            </div>

            <div className="last-activity py-3">
              Last Activity: 2 Jan, 5:45 pm
            </div>
          </div>
        </div>

        <div className="contact-btn-wrap lg:px-10 px-4 pb-10 pt-3 flex flex-wrap justify-center sm:justify-start ">

          <button  onClick={showCallModal} className="contact-btn flex items-center bg-6192FF rounded-md px-4 py-2 ">
            <IoMdCall className="mr-2 text-white" size={20} />
            <span className="text-white font-normal text-base">Call</span>
          </button>
          <button onClick={showEmailModal} className="contact-btn flex items-center bg-6192FF rounded-md px-4 py-2">
            <HiOutlineMail className="mr-2 text-white" size={20} />
            <span className="text-white font-normal text-base">Email</span>
          </button>
          <button  onClick={showDealModal} className="contact-btn flex items-center bg-6192FF rounded-md px-4 py-2">
            <HiOutlineChatAlt2 className="mr-2 text-white" size={20} />
            <span className="text-white font-normal text-base">SMS</span>
          </button>
          <button  onClick={showMeetModal} className="contact-btn flex items-center bg-6192FF rounded-md px-4 py-2">
            <FaVideo className="mr-2 text-white" size={20} />
            <span className="text-white font-normal text-base">Meeting</span>
          </button>
          <button
            className="contact-btn flex items-center bg-6192FF rounded-md px-4 py-2"
            onClick={showNoteModal}
          >
            <div className="text-white font-normal text-base">
              <HiDocumentText className="mr-1" />
            </div>
            <div className="text-white font-normal text-base">Notes</div>
          </button>
          <button onClick={showTaskModal} className="contact-btn flex items-center bg-6192FF rounded-md px-4 py-2">
            <HiFolderOpen className="mr-1 text-white" size={20} />
            <span className="text-white font-normal text-base">Task</span>
          </button>
          <button className="transfer-btn flex items-center bg-6192FF rounded-md px-4 py-2">
            <span className="text-white font-normal text-base">Transfer</span>
          </button>
        </div>

        <div className="pr-10 pb-4">
          <Row>
            <Col xs={8} sm={6}>
              <div className="main-info-wrap">
                <div className="info-title">lead Type</div>
                <button
                  style={getButtonStyle(cardData.leadType)}
                  className="rounded-2xl leadtype-btn"
                >
                  {cardData.leadType}
                </button>
              </div>
            </Col>
            <Col xs={8} sm={6}>
              <div className="main-info-wrap">
                <div className="info-title">Email Id</div>
                <div className="sub-info ">{cardData.email}</div>
              </div>
            </Col>
            <Col xs={8} sm={6}>
              {" "}
              <div className="main-info-wrap">
                <div className="info-title">Contact Number</div>
                <div className="sub-info ">{cardData.contactNumber}</div>
              </div>
            </Col>
            <Col xs={8} sm={6}>
              <div className="main-info-wrap">
                <div className="info-title">Lead Source</div>
                <div className="sub-info ">{cardData.leadSource}</div>
              </div>
            </Col>
            <Col xs={8} sm={6}>
              <div className="main-info-wrap">
                <div className="info-title">Lead Owner</div>
                <div className="sub-info ">{cardData.leadOwner}</div>
              </div>
            </Col>
            <Col xs={8} sm={6}>
              <div className="main-info-wrap">
                <div className="info-title">Lead Created</div>
                <div className="sub-info ">{cardData.leadCreated}</div>
              </div>
            </Col>
            <Col xs={8} sm={6}>
              <div className="main-info-wrap">
                <div className="info-title">location</div>
                <div className="sub-info ">Delhi</div>
              </div>
            </Col>
          </Row>
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
      <CreateDeal
        visible={isDealModalVisible}
        onCancel={handleDealModalCancel}
      />
    </>
  );
};

export default Priority;
