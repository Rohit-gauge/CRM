import React, { useState, useEffect } from "react";
import Cardlead from "../../Components/sales/lead/CardInfo";
import { CardDataContext } from "../cardContext/CardContext"
import Detail from "../sales/leaddetail/Detail";

// import Detail from "../components/content/Detail";




const DashboardSales = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = (cardData) => {
    setSelectedCard(cardData);
  };




  useEffect(() => {
    if (!selectedCard) {
      setSelectedCard(cardData[0]);
    }
  }, [selectedCard]);

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
  ]




  return (

    <>
      <CardDataContext.Provider value={selectedCard}>
        <div className="p-4 sm:ml-44">
       
            <div className=" rounded-lg md:mt-10 mt-4 ">
              <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-full md:col-span-4 flex justify-center">
                  <Cardlead onCardSelect={handleCardSelection} />
                </div>
                <div className="col-span-full md:col-span-8 flex justify-center">
                  <Detail />
                </div>
              </div>
            </div>

          

        </div>

      </CardDataContext.Provider>
    </>





  );
};

export default DashboardSales;
