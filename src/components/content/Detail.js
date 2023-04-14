import React, {useContext} from "react";
import Priority from "./MoreDetail/Priority";
import Steps from "./MoreDetail/Steps";
import Taskbar from "./MoreDetail/Taskbar";
import { CardDataContext } from "../../components/cardContext/CardContext";

const Detail = () => {
  const cardData = useContext(CardDataContext);
  
  return (
    <div className="relative">  
      {cardData ? (
        <div className="card-container-right bg-white rounded-lg shadow-2xl overflow-hidden cursor-pointer">
          <div className="card-inner ">
            <Priority cardData={cardData} />
            <Steps />
            <Taskbar cardData={cardData} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Detail;
