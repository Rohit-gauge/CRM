import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import CloseTicket from "../components/supportcontent/suppordetailcontent/CloseTicket";
import TicketStatus from "../components/supportcontent/suppordetailcontent/TicketStatus";
import DeviceDetail from "../components/supportcontent/suppordetailcontent/DeviceDetail";
import { CardDataContext } from "../components/cardContext/CardContext";

const SupportContent = () => {
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
  ];

  const selectedCardData = cardData.find((card) => card.id === parseInt(id));

  return (
    <div className="md:mt-16 ml-">
       <div className="text-blue-500 flex">
            <button
             
              className="mb-6  mx-auto  font-semibold flex "
            >
              
              Ticket Details
            </button>
          </div>
    {selectedCardData ? (
      <div className="card-container-right bg-white rounded-lg shadow-2xl overflow-hidden cursor-pointer mx-4 mb-4 md:ml-40">
     <div>
            <CloseTicket supportData={selectedCardData} />
            <TicketStatus />
            <DeviceDetail supportData={selectedCardData} />
          </div>
    </div>
    ) : (
      <div>No card found</div>
    )}
  </div>
  );
};

export default SupportContent;
