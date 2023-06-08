import React, { useState, useEffect } from "react";
// import { Select } from "antd";
import { HiFilter } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Input } from "antd";
import CreateLead from "./MoreDetail/ModalsAction/CreateLead";
import FilterModal from "./MoreDetail/ModalsAction/FilterModal";

const CardInfo = ({ onCardSelect }) => {
  const navigate = useNavigate();

  // Function to get button style based on text
  const [selectedCard, setSelectedCard] = useState(0); // state to hold selected card data
  const [selectedCardId, setSelectedCardId] = useState(null);
  const leadTypes = ["Cold Lead", "Warm Lead", "Hot Lead"];
  const [selectedLeadType, setSelectedLeadType] = useState(null);

  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [isLeadModalVisible, setIsLeadModalVisible] = useState(false);

  const showLeadModal = () => {
    setIsLeadModalVisible(true);
  };
  const showFilterModal = () => {
    setIsFilterModalVisible(true);
  };

  const handleLeadModalCancel = () => {
    setIsLeadModalVisible(false);
  };
  const handleFilterModalCancel = () => {
    setIsFilterModalVisible(false);
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

  // Dummy data for cards
  const cardData = [
    {
      id: 1,
      title: "Harish Verma",
      email: "harish@example.com",
      contactNumber: "   9876543210",
      leadSource: "Website",
      leadOwner: "harish",
      leadCreated: "2022-03-15",
      description: "Meeting is scheduled for 5th july at 3:00 pm.",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "Cold Lead",
    },
    {
      id: 2,
      title: "Mohan Verma",
      email: "mohan@example.com",
      contactNumber: "   9876543210",
      leadSource: "Referral",
      leadOwner: "Mohan",
      leadCreated: "2022-02-28",
      description: "Call is scheduled for 5th july at 3:00 pm",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "Hot Lead",
    },
    {
      id: 3,
      title: "Disha Verma",
      email: "disha@example.com",
      contactNumber: "   9876543210",
      leadSource: "Event",
      leadOwner: "Disha",
      leadCreated: "2022-01-15",
      description: "Follow up is pending.",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "Warm Lead",
    },
    {
      id: 4,
      title: "Madhera Verma",
      email: "madhera.verma@example.com",
      contactNumber: "   9876543210",
      leadSource: "Website",
      leadOwner: "Mady",
      leadCreated: "2022-04-01",
      description: "Follow up is pending",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "Cold Lead",
    },
    {
      id: 5,
      title: "Hari Verma",
      email: "hari.verma@example.com",
      contactNumber: "   9876543210",
      leadSource: "Event",
      leadOwner: "hari",
      leadCreated: "2022-02-01",
      description: "Meeting is scheduled for 5th july at 3:00 pm.",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "Hot Lead",
    },
    {
      id: 6,
      title: "Hari Verma",
      email: "hari.verma@example.com",
      contactNumber: "   9876543210",
      leadSource: "Event",
      leadOwner: "hari",
      leadCreated: "2022-02-01",
      description: "Meeting is scheduled for 5th july at 3:00 pm.",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "Hot Lead",
    },
  ];

  // Set the initial selectedCard to the first object in the cardData array
  useEffect(() => {
    setSelectedCard(cardData[0]);
  }, []);

  const handleCardClick = (card) => {
    if (window.innerWidth <= 768) {
      navigate(`/detail/${card.id}`); // Navigate to the detail page with the card id as a parameter
    } else {
      setSelectedCardId(card.id);
      setSelectedCard(card);
      onCardSelect(card);
    }
  };

  // Filter cardData array based on selected lead type
  const filteredCardData =
    selectedLeadType === null
      ? cardData
      : cardData.filter((card) => card.leadType === selectedLeadType);

  return (
    <>
      <div className="flex flex-col ">
        <div className="desktop-search hidden md:block">
        <div className="flex justify-between ">
          <div className="text-blue-500 mx-auto md:mx-0 ">
            <button
              onClick={showLeadModal}
              className="mb-6 md:mb-3 font-semibold flex sm:mr-20  "
            >
             <span>
             <AiOutlinePlus className="mt-1 font-semibold"/>
             </span>
              Create Lead
            </button>
          </div>
         
        </div>

        <div className="search-wrap flex mb-6 ">
          <Input
            size="large"
            placeholder="Search"
            prefix={<AiOutlineSearch />}
            className="w-full mr-3 shadow-md "
          />
          <button onClick={showFilterModal} className="filter-btn flex ">
            {" "}
            <HiFilter className="flex m-1 " /> Filter
          </button>
        </div>
        </div>

        <div className="mobile-search md:hidden">
        <div className="flex justify-between">
    <div className="text-blue-500 mx-auto md:mx-0">
      <button
        onClick={showLeadModal}
        className="mb-6 md:mb-3 font-semibold flex sm:mr-20"
      >
        Create Lead
      </button>
    </div>
   
    <div className="search-wrap flex  mb-6">
    
    <button className="search-btn md:hidden flex items-center">
      <AiOutlineSearch size={20} className="mr-1 text-gray-700" />
    </button>
    <Input
      size="large"
      placeholder="Search"
      prefix={<AiOutlineSearch  />}
      className="w-full mr-3 shadow-md md:block hidden"
    />
  
    <button
      onClick={showFilterModal}
      className=" md:hidden flex items-center"
    >
      <BiFilterAlt size={20} className="flex m-1 text-gray-700" />
    </button>
  </div>
  </div>
        </div>
       

        <div className="flex flex-col ">
          <div className="flex text-black py-1 pb-6 flex-wrap  justify-center space-x-1 lg:space-x-1 ">
            <button className="border border-blue-400 rounded-2xl  text-center text-blue-500 inline-block px-2 mb-3 lg:mb-0 text-xs  ">
              All
            </button>
            <button className="border border-blue-400 rounded-3xl p-1 text-center text-blue-500 inline-block px-2 mb-3 lg:mb-0 text-xs ">
              Upcoming task
            </button>
            <button className="border border-blue-400 rounded-3xl p-1 text-center text-blue-500 inline-block px-2 mb-3 lg:mb-0 text-xs ">
              New leads
            </button>
            <button className="border border-blue-400 rounded-3xl p-1 text-center text-blue-500 inline-block px-2 mb-3 lg:mb-0 text-xs ">
              Contacted leads
            </button>
          </div>
        </div>

        <div className="flex flex-col ">
          <div
            className="overflow-y-auto"
            // style={{ height: "calc(100vh - 120px)" }}
          >
            {filteredCardData.map((card, index) => (
              <div
                className={`card-container mb-2 bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer ${
                  selectedCardId === card.id ? "selected-ticket" : ""
                }`}
                key={card.id}
                onClick={() => handleCardClick(card)}
               
              >
                <div className="flex px-4 pt-4 pb-1 ">
                  <div className="w-full  ">
                    <h3 className="text-lg font-normal text-md ">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-base card-description">
                      {card.description}
                    </p>
                    <div className="mt-4">
                      <button
                        style={getButtonStyle(card.leadType)}
                        className="card-button"
                      >
                        {card.leadType}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CreateLead
        visible={isLeadModalVisible}
        onCancel={handleLeadModalCancel}
      />
      <FilterModal
        visible={isFilterModalVisible}
        onCancel={handleFilterModalCancel}
      />
    </>
  );
};

export default CardInfo;
