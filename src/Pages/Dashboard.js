import React, { useState, useEffect } from "react";
import Detail from "../components/content/Detail";
import { CardDataContext } from "../components/cardContext/CardContext";
import Cardlead from "../components/content/CardInfo";


const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = (cardData) => {
    setSelectedCard(cardData);
  };

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
  ];

  useEffect(() => {
    if (!selectedCard) {
      setSelectedCard(cardData[0]);
    }
  }, [selectedCard]);



  return (
    <CardDataContext.Provider value={selectedCard}>
      <div className="sm:ml-24 ">

        <div className="support-container  grid grid-cols-12 ">
          
          <div className="card-list-container md:ml-20  sm:mt-10 col-span-full md:col-span-4">
            <Cardlead onCardSelect={handleCardSelection} />
          </div>
          <div className="detail-container col-span-full md:col-span-8 md:ml-10 md:mt-10 md:mr-12 hidden  md:block">
            <Detail />
          </div>
        </div>
      </div>
    </CardDataContext.Provider>
  );
};

export default Dashboard;
