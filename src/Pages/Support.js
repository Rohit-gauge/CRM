import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import Detail from "../components/content/Detail";
import { CardDataContext } from "../components/cardContext/CardContext";
import Cardlead from "../components/content/CardInfo";
import SupportCard from "../components/supportcontent/SupportCard";
import TicketDetail from "../components/supportcontent/TicketDetail";

const Support = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = (supportData) => {
    setSelectedCard(supportData);
  };

  useEffect(() => {
    if (!selectedCard) {
      setSelectedCard(supportData[0]); // Set the initial selected card to the first card in the supportData array
    }
  }, [selectedCard]);

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
      subject: "Issue with water quality ",
      description: "I have noticed that the water coming out of my water purifier has an unusual taste and smell. I'm concerned about the quality of the water being",
      image:
        "https://ik.imagekit.io/aq3ybtarw/CRM/irene-strong-v2aKnjMbP_k-unsplash-min.jpg?updatedAt=1680421088764",
      leadType: "Low Priority",
      isOnline: true,
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
         <div className="sm:ml-24">
        <div className="support-container grid grid-cols-12 ">
          <div className="card-list-container md:ml-20 pt-0 sm:mt-10 col-span-full md:col-span-4">
            <SupportCard onCardSelect={handleCardSelection} />
          </div>
          <div className="supports-container hidden md:block col-span-full md:col-span-8 md:ml-10 md:mt-10 md:mr-12">
             <TicketDetail />
          </div>
        </div>
      </div>
      {/* <div className=" sm:m-20 mt-20 md:mt-4 px-6 ">
       
       <div className=" rounded-lg md:mt-10 mt-4 ">
         <div className="grid grid-cols-12 gap-4 mb-4">
           <div className="col-span-full md:col-span-4 ">
           <SupportCard onCardSelect={handleCardSelection} />
           </div>
           <div className="col-span-full md:col-span-8 sm:mx-4   ">
             <TicketDetail />
           </div>
         </div>
       </div>

     

   </div> */}
    </CardDataContext.Provider>


  );
};

export default Support;
