import React, { useState, useEffect } from "react";
// import { Select } from "antd";
import { HiFilter, HiBookOpen } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";

import { Input } from "antd";
import FilterModal from "../supportcontent/ModalSupport/TicketFilter";
import CreateTicket from "./ModalSupport/CreateTicketModal";
import { useNavigate } from "react-router-dom";

const SupportCard = ({ onCardSelect }) => {
  const navigate = useNavigate();
  const [isTicketModalVisible, setIsTicketModalVisible] = useState(false);

  // Function to get button style based on text
  const [selectedCard, setSelectedCard] = useState(0); // state to hold selected card data
  const [selectedCardId, setSelectedCardId] = useState(null);
  
  
  const leadTypes = ["Low Priority", "High Priority", "High Priority"];
  const [selectedLeadType, setSelectedLeadType] = useState(null);

  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [isLeadModalVisible, setIsLeadModalVisible] = useState(false);

  const showTicketModal = () => {
    setIsTicketModalVisible(true);
  };

  const showFilterModal = () => {
    setIsFilterModalVisible(true);
  };

  const handleTicketModalCancel = () => {
    setIsTicketModalVisible(false);
  };
  const handleFilterModalCancel = () => {
    setIsFilterModalVisible(false);
  };

  const getButtonStyle = (text) => {
    let buttonStyle = {
      backgroundColor: "#000000", // Default color
      color: "#FFFFFF", // Default text color
    };
    if (text === "Low Priority") {
      buttonStyle.backgroundColor = "#C7FDBE";
      buttonStyle.color = "#2e8a2c";
    } else if (text === "High Priority") {
      buttonStyle.backgroundColor = "#FDC1BE";
      buttonStyle.color = "#8A3D2C";
    } else if (text === "High Priority") {
      buttonStyle.backgroundColor = "#FDD8BE";
      buttonStyle.color = "#8A4E2C";
    }
    return buttonStyle;
  };

  // Dummy data for cards
  const supportData = [
    {
      id: 1,
      title: "Harish Verma",
      email: "harish@example.com",
      contactNumber: "   9876543210",
      leadSource: "Website",
      leadOwner: "harish",
      DeviceId: "293@hds",
      TicketId: "73e823",
      RaisedId: "Chatbot, 10 jan 10:30",
      leadCreated: "13th May 2022 at 3:00",
      description: "I have noticed that the water coming out of my water purifier has an unusual taste and smell. I'm concerned about the quality of the water being",
      subject: "Issue with water quality ",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "Low Priority",
  
    },
    {
      id: 2,
      title: "Mohan Verma",
      email: "mohan@example.com",
      contactNumber: "   9876543210",
      leadSource: "Referral",

      DeviceId: "293@hds",
      TicketId: "73e823",
      RaisedId: "Chatbot, 10 jan 10:30",
      leadOwner: "Mohan",
      leadCreated: "13th May 2022 at 3:00",
      subject: "Issue with water quality ",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "High Priority",
      isOnline: false,
    },
    {
      id: 3,
      title: "Disha Verma",
      email: "disha@example.com",
      contactNumber: "   9876543210",
      leadSource: "Event",

      DeviceId: "293@hds",
      TicketId: "73e823",
      RaisedId: "Chatbot, 10 jan 10:30",
      description: "I have noticed that the water coming out of my water purifier has an unusual taste and smell. I'm concerned about the quality of the water being",
      leadOwner: "Disha",
      leadCreated: "13th May 2022 at 3:00",
      subject: "Issue with water quality ",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "High Priority",
      isOnline: false,
    },
    {
      id: 4,
      title: "Mady Verma",
      email: "madhera.verma@example.com",
      contactNumber: "   9876543210",
      leadSource: "Website",
      description: "I have noticed that the water coming out of my water purifier has an unusual taste and smell. I'm concerned about the quality of the water being",
      DeviceId: "293@hds",
      TicketId: "73e823",
      RaisedId: "Chatbot, 10 jan 10:30",
      leadOwner: "Mady",
      leadCreated: "13th May 2022 at 3:00",
      subject: "Issue with water quality ",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "Low Priority",
     
    },

    {
      id: 5,
      title: "Hari Verma",
      email: "hari.verma@example.com",
      contactNumber: "   9876543210",
      leadSource: "Event",
      description: "I have noticed that the water coming out of my water purifier has an unusual taste and smell. I'm concerned about the quality of the water being",
      DeviceId: "293@hds",
      TicketId: "73e823",
      RaisedId: "Chatbot, 10 jan 10:30",
      leadOwner: "hari",
      leadCreated: "13th May 2022 at 3:00",
      subject: "Issue with water quality ",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "High Priority",
      isOnline: false,
    },
    {
      id: 6,
      title: "Hari Verma",
      email: "hari.verma@example.com",
      contactNumber: "   9876543210",
      leadSource: "Event",
      description: "I have noticed that the water coming out of my water purifier has an unusual taste and smell. I'm concerned about the quality of the water being",
      DeviceId: "293@hds",
      TicketId: "73e823",
      RaisedId: "Chatbot, 10 jan 10:30",
      leadOwner: "hari",
      leadCreated: "13th May 2022 at 3:00",
      subject: "Issue with water quality ",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "High Priority",
      isOnline: false,
    },
  ];

  // Set the initial selectedCard to the first object in the supportData array
  useEffect(() => {
    setSelectedCard(supportData[0]);
  }, []);

  const handleCardClick = (card) => {
    if (window.innerWidth <= 768) {
      navigate(`/supportdetail/${card.id}`); 
    } else {
    setSelectedCardId(card.id);
    setSelectedCard(card);
    onCardSelect(card); }
  };

  // Filter supportData array based on selected lead type
  const filteredCardData =
    selectedLeadType === null
      ? supportData
      : supportData.filter((card) => card.leadType === selectedLeadType);

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex justify-between">
          <div className="text-blue-500 mx-auto md:mx-0">
            <button
              onClick={showTicketModal}
              className="mb-6 md:mb-3 font-semibold flex sm:mr-20 "
            >
              <span onClick={showTicketModal} className="pt-1">
                <AiOutlinePlus className="font-bold" />
              </span>
              Create Ticket
            </button>
          </div>
          {/* <div className="text-blue-500 flex space-x-4">
            <HiBookOpen size={22} />
            <MdNotifications size={20} />
          </div> */}
        </div>

        <div className="search-wrap flex mb-6 ">
          <Input
            size="large"
            placeholder="Search by Text"
            prefix={<AiOutlineSearch />}
            className="w-full mr-3 shadow-md "
          />
          <button onClick={showFilterModal} className="filter-btn flex ">
            {" "}
            <HiFilter className="flex m-1 " /> Filter
          </button>
        </div>

        {/* <div className="flex flex-col card-lead-wrap ">
          <div
            className="overflow-y-auto"
            style={{ height: "calc(100vh - 120px)" }}
          >
            {filteredCardData.map((card) => (
              <div
                className={`card-container mb-2 bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer ${selectedCardId === card.id ? "selected-ticket" : ""
                  }`}
                key={card.id}
                onClick={() => handleCardClick(card)}
                
              >
                <div class="flex px-4 pt-4 pb-1">
                 
                  <div class="w-6/12 px-4">
                    <h3 className={`card ${card.isOnline ? "online" : ""}`}>
                      {card.title}
                    </h3>
                    <p class="text-gray-600 text-xs card-description">
                      {card.subject}
                    </p>
                    <span className="ticket-created">{card.leadCreated}</span>
                    <div class="mt-2">
                      <button
                        style={getButtonStyle(card.leadType)}
                        class="text-xs p-1 px-2 rounded-xl"
                      >
                        {card.leadType}
                      </button>
                    </div>
                  </div>
                  <div class="w-4/12 mt-1 ">
                    <button className="remain-btn m-auto flex text-xs">
                      {" "}
                      0 h remaining
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
         <div className="flex flex-col " >
    <div className="overflow-y-auto" >
      {filteredCardData.map((card, index) => (
        <div
          className={`card-container mb-2 bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer ${
            selectedCardId === card.id ? "selected-ticket" : ""
          }`}
          key={card.id}
          onClick={() => handleCardClick(card)}
         
        >
               <div class="flex  pt-0 pb-1">
                 
                 <div class="w-6/12 px-4">
                   <h3 className={`card ${card.isOnline ? "online" : ""}`}>
                     {card.title}
                   </h3>
                   <p class="text-gray-600 text-xs card-description">
                     {card.subject}
                   </p>
                   <span className="ticket-created">{card.leadCreated}</span>
                   <div class="mt-2">
                     <button
                       style={getButtonStyle(card.leadType)}
                       class="text-xs p-1 px-2 rounded-xl"
                     >
                       {card.leadType}
                     </button>
                   </div>
                 </div>
                 <div class="w-4/12 mt-1 ">
                   <button className="remain-btn m-auto flex text-xs">
                     {" "}
                     0 h remaining
                   </button>
                 </div>
               </div>
             </div>
            ))}
          </div>
        </div>
      </div>
      <CreateTicket
        visible={isTicketModalVisible}
        onCancel={handleTicketModalCancel}
      />
      <FilterModal
        visible={isFilterModalVisible}
        onCancel={handleFilterModalCancel}
      />
    </>
  );
};

export default SupportCard;
