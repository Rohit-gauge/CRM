import React, {useState, useEffect} from "react";
import { Row, Col } from "antd";
import Cards from "../components/content/CardInfo";
import Detail from "../components/content/Detail";
import { CardDataContext } from "../components/cardContext/CardContext";

const Dashboard = () => {
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
  <div className="content">
    <Row gutter={[16, 16]}  >
      <Col xs={24} md={7}>
        <div className="left-content-wrap">
          <Cards onCardSelect={handleCardSelection} />
        </div>
      </Col>
      <Col xs={24} md={16}>
        <div className="right-content-wrap">
          <Detail />
        </div>
      </Col>
    </Row>
  </div>
</CardDataContext.Provider>


  );
};

export default Dashboard;
