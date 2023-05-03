import React, { useState, useEffect } from "react";
// import { Select } from "antd";
import { HiFilter } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";

import { Input } from "antd";
import CreateLead from "../ModalsAction/CreateLead";
import FilterModal from "../ModalsAction/FilterModal";

const CardInfo = ({ onCardSelect }) => {
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
  ];

  // Set the initial selectedCard to the first object in the cardData array
  useEffect(() => {
    setSelectedCard(cardData[0]);
  }, []);

  const handleCardClick = (card) => {
    setSelectedCardId(card.id);
    setSelectedCard(card);
    onCardSelect(card);
  };

  // Filter cardData array based on selected lead type
  const filteredCardData =
    selectedLeadType === null
      ? cardData
      : cardData.filter((card) => card.leadType === selectedLeadType);

  return (
    <>
      <div className="flex flex-col ">
      <div className="flex justify-between">
  <div className="text-blue-500">
    <button
      onClick={showLeadModal}
      className="mb-3 font-semibold flex sm:mr-20 mr-24"
    >
      <span className="p-1">
        <AiOutlinePlus className="font-bold" />
      </span>
      Create Lead
    </button>
  </div>
  <div className="text-blue-500">
    <MdNotifications size={20} className="m-auto" />
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

        <div className="flex flex-col">
  <div className="flex text-black py-1 pb-6 flex-wrap justify-center lg:space-x-1 space-x-2"> 
    <button className="border border-blue-400 rounded-2xl p-1 text-center text-blue-500 inline-block px-3 mb-3 lg:mb-0 lg:text-base text-sm">
      All
    </button>
    <button className="border border-blue-400 rounded-3xl p-1 text-center text-blue-500 inline-block px-3 mb-3 lg:mb-0 lg:text-base text-sm">
      Upcoming task
    </button>
    <button className="border border-blue-400 rounded-3xl p-1 text-center text-blue-500 inline-block px-3 mb-3 lg:mb-0 lg:text-base text-sm">
      New leads
    </button>
    <button className="border border-blue-400 rounded-3xl p-1 text-center text-blue-500 inline-block px-3 mb-3 lg:mb-0 lg:text-base text-sm">
      Contacted leads
    </button>
  </div>
</div>



        <div className="flex flex-col ">
          <div className="overflow-y-auto" style={{ height: "calc(100vh - 20px )" }}>
            {filteredCardData.map((card) => (
              <div
                className={`card-container mb-8 bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer ${selectedCardId === card.id ? "selected" : ""
                  }`}
                key={card.id}
                onClick={() => handleCardClick(card)}
              >
                <div className="flex px-4 pt-4 pb-1 ">
                  <div className="w-1/5 mt-2">
                    <div className="card-img-wrap ">
                      <img
                        className="card-image"
                        src={card.image}
                        alt={card.title}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4  ">
                    <h3 className="text-lg font-medium ">{card.title}</h3>
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
