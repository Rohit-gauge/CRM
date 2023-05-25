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
import TransferModal from "./ModalsAction/TransferModal";
import VerificationModal from "./ModalsAction/VerificationModal";
import SmsModal from "./ModalsAction/SmsModal";

const Priority = ({ cardData }) => {
  const [isNoteModalVisible, setIsNoteModalVisible] = useState(false);
  const [isCallModalVisible, setIsCallModalVisible] = useState(false);
  const [isTaskModalVisible, setIsTaskModalVisible] = useState(false);
  const [isMeetModalVisible, setIsMeetModalVisible] = useState(false);
  const [isEmailModalVisible, setIsEmailModalVisible] = useState(false);
  const [isDealModalVisible, setIsDealModalVisible] = useState(false);
  const [isTransferModalVisible, setIsTransferModalVisible] = useState(false);
  const [isThirdModalVisible, setIsThirdModalVisible] = useState(false);
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
  const showDealModal = () => {
    setIsDealModalVisible(true);
  };
  const showTransferModal = () => {
    setIsTransferModalVisible(true);
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
  const handleDealModalCancel = () => {
    setIsDealModalVisible(false);
  };
  const handleTransferModalCancel = () => {
    setIsTransferModalVisible(false);
  };
  const handleThirdModalCancel = () => {
    setIsThirdModalVisible(false);
  };
  const handleSMSModalCancel = () => {
    setIsSMSModalVisible(false);
  };

  const handleSaveClick = () => {
    // handle save logic here
    setIsThirdModalVisible(true);
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
      <div className="priority-wrap border-b-2 border-gray-300 ">
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

          <div className="lead-detail-wrap flex w-full mr-6 relative ">

            <div className=" px-2   w-full  ">
              <h3 className="text-lg font-medium ">{cardData.title}</h3>
              <div className="mt-1">
                <button className="priority-btn ">
                  {" "}
                  <span>
                    <AiOutlinePlus />
                  </span>
                  &nbsp;Set Priority
                </button>
              </div>

              <div className="last-activity text-gray-600 text-base card-description">
                Last Activity: 2 Jan, 5:45 pm
              </div>
            </div>

            <div className="absolute right-0">

              <button onClick={showDealModal} className="mt-2 md:mx-auto text-blue-400 font-bold  text-sm lg:py-2 lg:px-2 border p-1 px-2 border-blue-700 rounded " >

                create deal
              </button>
            </div>

          </div>



        </div>

        <div className="contact-btn-wrap lg:px-10 px-2 pb-10 pt-3 flex flex-wrap justify-center sm:justify-start ">

          <button onClick={showCallModal} className="contact-btn flex items-center bg-6192FF rounded-md px-2 py-2 ">
            <IoMdCall className="mr-2 text-white" size={20} />
            <span className="text-white font-normal text-base">Call</span>
          </button>
          <button onClick={showEmailModal} className="contact-btn flex items-center bg-6192FF rounded-md px-2 py-2">
            <HiOutlineMail className="mr-2 text-white" size={20} />
            <span className="text-white font-normal text-base">Email</span>
          </button>
          <button onClick={showSMSModal} className="contact-btn flex items-center bg-6192FF rounded-md px-2 py-2">
            <HiOutlineChatAlt2 className="mr-2 text-white" size={20} />
            <span className="text-white font-normal text-base">SMS</span>
          </button>
          <button onClick={showMeetModal} className="contact-btn flex items-center bg-6192FF rounded-md px-2 py-2">
            <FaVideo className="mr-2 text-white" size={20} />
            <span className="text-white font-normal text-base">Meeting</span>
          </button>
          <button
            className="contact-btn flex items-center bg-6192FF rounded-md px-2 py-2"
            onClick={showNoteModal}
          >
            <div className="text-white font-normal text-base">
              <HiDocumentText className="mr-1" />
            </div>
            <span className="text-white font-normal text-base">Notes</span>
          </button>
          <button onClick={showTaskModal} className="contact-btn flex items-center bg-6192FF rounded-md px-2 py-2">
            <HiFolderOpen className="mr-1 text-white" size={20} />
            <span className="text-white font-normal text-base">Task</span>
          </button>
          <button onClick={showTransferModal} className="transfer-btn flex items-center bg-6192FF rounded-md px-2 py-2">
            <span className="text-white font-normal text-base">Transfer</span>
          </button>
        </div>
        <div className="h-full overflow-auto" >
          <div style={{ height: "145px", overflow: "auto" }} className="pr-10 pb-4 lg:mx-11 mx-9 ">
            <Row>
              <Col xs={12} sm={6}>
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
              <Col xs={12} sm={6}>
                <div className="main-info-wrap">
                  <div className="info-title">Email Id</div>
                  <div className="sub-info ">{cardData.email}</div>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                {" "}
                <div className="main-info-wrap">
                  <div className="info-title">Contact Number</div>
                  <div className="sub-info ">{cardData.contactNumber}</div>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="main-info-wrap">
                  <div className="info-title">Lead Source</div>
                  <div className="sub-info ">{cardData.leadSource}</div>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="main-info-wrap">
                  <div className="info-title">Lead Owner</div>
                  <div className="sub-info ">{cardData.leadOwner}</div>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="main-info-wrap">
                  <div className="info-title">Lead Created</div>
                  <div className="sub-info ">{cardData.leadCreated}</div>
                </div>
              </Col>

              <Col xs={12} sm={6}>
                <div className="main-info-wrap">
                  <div className="info-title">Pincode</div>
                  <div className="sub-info ">110066</div>
                </div>
              </Col>

              <Col xs={12} sm={6}>
                <div className="main-info-wrap">
                  <div className="info-title">Job Function</div>
                  <div className="sub-info ">Delhi</div>
                </div>
              </Col>
            </Row>
          </div>
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
      <SmsModal
        visible={isSMSModalVisible}
        onCancel={handleSMSModalCancel}
      />
      <CreateDeal
        visible={isDealModalVisible}
        onCancel={handleDealModalCancel}
      />
      <TransferModal
        visible={isTransferModalVisible}
        onCancel={handleTransferModalCancel}
        onSaveClick={handleSaveClick}
        isThirdModalVisible={isThirdModalVisible}
      />
      <VerificationModal
        visible={isThirdModalVisible}
        onCancel={handleThirdModalCancel}

      />
    </>
  );
};

export default Priority;
