import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import {
  HiOutlineMail,
  HiOutlineChatAlt2,
  HiDocumentText,
} from "react-icons/hi";
import TransferTicketModal from "../ModalSupport/TransferTicket";
import MergeTicket from "../ModalSupport/MergeTicket";
import CloseTicketModal from "../ModalSupport/CLoseTicketModal";
import Subjects from "../TicketSubject/Subject";

const CloseTicket = ({ supportData }) => {
  const [isTransferModalVisible, setIsTransferModalVisible] = useState(false);
  const [isMergeModalVisible, setIsMergeModalVisible] = useState(false);
  const [isCloseTicketModalVisible, setIsCloseTicketModalVisible] =
    useState(false);

  const showTransferModal = () => {
    setIsTransferModalVisible(true);
  };
  const showMergeModal = () => {
    setIsMergeModalVisible(true);
  };
  const showCloseTicketModal = () => {
    setIsCloseTicketModalVisible(true);
  };

  const handleTransferModalCancel = () => {
    setIsTransferModalVisible(false);
  };
  const handleMergeModalCancel = () => {
    setIsMergeModalVisible(false);
  };

  const handleCloseTicketModalCancel = () => {
    setIsCloseTicketModalVisible(false);
  };

  return (
    <>
      <div className="priority-wrap border-b-2 border-gray-300 lg:px-7  pb-6">
        <div className="flex  pt-7">
          

          <div className="lead-detail-wrap flex w-full mr-6 relative ">
            <div className=" px-4   w-full   ">
              <h3 className="text-md font-medium  text-blue-400">
                {supportData.title}
              </h3>
              <div className="mt-1">
                <h2 className="text-bold ticket-created">
                  Device Id: {supportData.DeviceId}
                </h2>

                <h2 className="text-bold flex ticket-created">
                  Ticket: {supportData.TicketId}
                </h2>

                <h2 className="text-bold flex ticket-created">
                  Raised Via: {supportData.RaisedId}{" "}
                </h2>
              </div>

              <div className="last-activity text-gray-600 text-base card-description">
                Last Activity: 2 Jan, 5:45 pm
              </div>
            </div>
            <div className="absolute -right-2.5 flex space-x-2   ">
              <button
                onClick={showTransferModal}
                className="mt-2 transfer-btn md:mx-auto text-blue-400 font-bold  md:text-sm lg:py-2 text-xs lg:px-2 border p-1 px-2 border-blue-700 rounded "
              >
                Transfer
              </button>
              <button
                onClick={showCloseTicketModal}
                className="mt-2 md:mx-auto text-blue-400 font-bold  md:text-sm lg:py-2 text-xs lg:px-2 border p-1 px-2 border-blue-700 rounded "
              >
                Close Ticket
              </button>
            </div>
          </div>
        </div>

        <div className="contact-btn-wrap  pb-2 pt-3 flex flex-wrap  pl-3 ">
          {/* <button className="contact-btn flex items-center bg-6192FF rounded-md px-4 py-2 ">
                    <IoMdCall className="mr-2 text-white" size={20} />
                </button> */}

          <button className="contact-btn flex items-center bg-6192FF rounded-md px-4 py-2">
            <HiOutlineChatAlt2 className="mr-2 text-white" size={20} />
          </button>

          <button className="contact-btn flex items-center bg-6192FF rounded-md px-4 py-2">
            <div className="text-white font-normal text-base">
              <HiDocumentText className="mr-1" />
            </div>
          </button>

          <button className="contact-btn flex items-center bg-6192FF rounded-md px-4 py-2">
            <HiOutlineMail className="mr-1 text-white" size={20} />
          </button>

          <button
            onClick={showMergeModal}
            className="contact-btn flex items-center bg-6192FF rounded-md px-4 py-2"
          >
            <span className="text-white font-normal text-base">Merge</span>
          </button>
        </div>

        <div className="subject">
          <Subjects supportData={supportData} />
        </div>
      </div>
      <TransferTicketModal
        visible={isTransferModalVisible}
        onCancel={handleTransferModalCancel}
        // onSaveClick={handleSaveClick}
        // isThirdModalVisible={isThirdModalVisible}
      />
      <MergeTicket
        visible={isMergeModalVisible}
        onCancel={handleMergeModalCancel}
      />
      <CloseTicketModal
        visible={isCloseTicketModalVisible}
        onCancel={handleCloseTicketModalCancel}
      />
    </>
  );
};

export default CloseTicket;
