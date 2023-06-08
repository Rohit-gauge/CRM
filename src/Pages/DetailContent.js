import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import Priority from "../components/content/MoreDetail/Priority";
import Taskbar from "../components/content/MoreDetail/Taskbar";
import { CardDataContext } from "../components/cardContext/CardContext";
import Steps from "../components/content/MoreDetail/Steps";

const CardDetail = () => {
  const { id } = useParams();
  const selectedCard = useContext(CardDataContext);

  // Fetch the card data based on the id from your cardData array or API

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

  const selectedCardData = cardData.find((card) => card.id === parseInt(id));

  return (
    <div className="md:mt-16 ">
       <div className="text-blue-500 ">
            <button
             
              className="mb-6  mx-auto  font-semibold flex "
            >
              
              Lead Details
            </button>
          </div>
    {selectedCardData ? (
      <div className="card-container-right bg-white rounded-lg shadow-2xl overflow-hidden cursor-pointer mx-4 mb-4">
      <div className="card-inner ">
        <Priority cardData={selectedCardData} />
        <Steps />
        <Taskbar cardData={selectedCardData} />
      </div>
    </div>
    ) : (
      <div>No card found</div>
    )}
  </div>
  );
};

export default CardDetail;
