import React, { useState, useEffect } from "react";
// import { Select } from "antd";
import {  HiFilter } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

import { Input } from "antd";

// const { Option } = Select;

// const { Meta } = AntCard;

const CardInfo = ({ onCardSelect }) => {
  // Function to get button style based on text
  const [selectedCard, setSelectedCard] = useState(0); // state to hold selected card data
  const [selectedCardId, setSelectedCardId] = useState(null);
  const leadTypes = ["Cold Lead", "Warm Lead", "Hot Lead"];
  const [selectedLeadType, setSelectedLeadType] = useState(null);

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
    <div className="flex flex-col ">
      {/* <div className="select-wrap mb-6 ">
        <Select
          defaultValue=" Leads"
          style={{ width: 120 }}
          className="custom-select "
          onChange={(value) => setSelectedLeadType(value)} // Add onChange event handler to update selected lead type
        >
          <Option value={null}>All Leads</Option>
          {leadTypes.map((leadType) => (
            <Option key={leadType} value={leadType}>
              {leadType}
            </Option>
          ))}
        </Select>
      </div> */}

      <div className="search-wrap flex mb-10 ">
        <Input
          size="large"
          placeholder="Search"
          prefix={<AiOutlineSearch />}
          className="w-3/4 mr-3 shadow-md "
        />
        <button className="filter-btn flex "> <  HiFilter className="flex m-1 " /> Filter</button>
      </div>

      {filteredCardData.map((card) => (
        <div
          className={`card-container mb-8 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer ${
            selectedCardId === card.id ? "selected" : ""
          }`}
          key={card.id}
          onClick={() => handleCardClick(card)}
        >
          <div className="flex px-4 pt-4 pb-1 ">
            <div className="w-1/5 mt-2">
              <div className="card-img-wrap ">
                <img className="card-image" src={card.image} alt={card.title} />
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
  );
};

export default CardInfo;
