import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import Detail from "../components/content/Detail";
import { CardDataContext } from "../components/cardContext/CardContext";
import Cardlead from "../components/content/CardInfo";
import SupportCard from "../components/supportcontent/SupportCard";
import CreateLead from "../components/content/MoreDetail/ModalsAction/CreateLead";

const Support = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = (cardData) => {
    setSelectedCard(cardData);
  };

  useEffect(() => {
    if (!selectedCard) {
      setSelectedCard(cardData[0]); // Set the initial selected card to the first card in the cardData array
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

    <CardDataContext.Provider value={selectedCard}>
      {/* <div className="content">
        <Row gutter={[16, 16]}  >
          <Col xs={24} md={8}>
            <div className="left-content-wrap">
              <SupportCard onCardSelect={handleCardSelection} />
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="right-content-wrap">
          
              content
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="right-content-wrap">
             
            </div>
          </Col>
        </Row>
      </div> */}
        <div className=" sm:m-20 mt-20 md:mt-4 px-6  ">
       
        <div className=" rounded-lg md:mt-10 mt-4 ">
         <div className="grid grid-cols-12 gap-4 mb-4">
           <div className="col-span-full md:col-span-4 ">
           <Cardlead onCardSelect={handleCardSelection} />
           </div>
           <div className="col-span-full md:col-span-8 sm:mx-4  ">
             <Detail   />
           </div>
         </div>
       </div>

     

   </div>
    </CardDataContext.Provider>


  );
};

export default Support;
