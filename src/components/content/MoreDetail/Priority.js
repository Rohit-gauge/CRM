import React, { useState } from "react";
import CreateDeal from "./ModalsAction/CreateDeal";
import TransferModal from "./ModalsAction/TransferModal";
import VerificationModal from "./ModalsAction/VerificationModal";
import LeadDetails from "./LeadDetails";

const Priority = ({ cardData }) => {
  const [isTransferModalVisible, setIsTransferModalVisible] = useState(false);
  const [isThirdModalVisible, setIsThirdModalVisible] = useState(false);
  const [isDealModalVisible, setIsDealModalVisible] = useState(false);

  const showTransferModal = () => {
    setIsTransferModalVisible(true);
  };
  const showDealModal = () => {
    setIsDealModalVisible(true);
  };

  const handleTransferModalCancel = () => {
    setIsTransferModalVisible(false);
  };
  const handleThirdModalCancel = () => {
    setIsThirdModalVisible(false);
  };

  const handleSaveClick = () => {
    setIsThirdModalVisible(true);
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
      <div className="priority-wrap border-b-2 border-gray-300 ">
        <div className="flex lg:pl-10 pl-2 pt-7">
          <div className="lead-detail-wrap flex w-full mr-6 relative ">
            <div className=" px-2   w-full  ">
              <h3 className="text-lg font-medium ">{cardData.title}</h3>
              <div className="mt-1">
                <button
                  style={getButtonStyle(cardData.leadType)}
                  className="rounded-2xl leadtype-btn"
                >
                  {cardData.leadType}
                </button>
              </div>

              <div className="last-activity text-gray-600 text-base card-description">
                Last Activity: 2 Jan, 5:45 pm
              </div>
            </div>

            <div className="absolute right-0 md:flex space-x-2">
              {/* <button className="transfer-btn flex items-center bg-6192FF rounded-md  px-2 py-2 ">
            <span className="text-white font-normal text-base">Transfer</span>
          </button> */}

              <button
                onClick={showTransferModal}
                className="mt-2 transfer-btn md:mx-auto text-blue-400 font-bold  md:text-sm lg:py-2 text-xs lg:px-2 border p-1 px-2 border-blue-700 rounded "
              >
                Transfer
              </button>
              <button
                onClick={showDealModal}
                className="mt-2 md:mx-auto text-blue-400 font-bold  md:text-sm lg:py-2 text-xs lg:px-2 border p-1 px-2 border-blue-700 rounded"
              >
                create deal
              </button>
            </div>
          </div>
        </div>

        <LeadDetails />
      </div>

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
      <CreateDeal
        visible={isDealModalVisible}
        onCancel={handleDealModalCancel}
      />
    </>
  );
};

export default Priority;
