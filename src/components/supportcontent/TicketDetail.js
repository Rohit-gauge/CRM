import React, { useContext } from "react";
import { CardDataContext } from "../../components/cardContext/CardContext";
import CloseTicket from "./suppordetailcontent/CloseTicket";
import TicketStatus from "./suppordetailcontent/TicketStatus";
import DeviceDetail from "./suppordetailcontent/DeviceDetail";

const TicketDetail = () => {
  const supportData = useContext(CardDataContext);

  return (
    <div className="relative">
      {supportData ? (
        <div className="card-container-right bg-white rounded-lg shadow-2xl overflow-hidden cursor-pointer">
          <div>
            <CloseTicket supportData={supportData} />
            <TicketStatus />
            <DeviceDetail supportData={supportData} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TicketDetail;
