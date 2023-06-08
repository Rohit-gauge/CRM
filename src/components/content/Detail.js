import React, {useContext} from "react";
import Priority from "./MoreDetail/Priority";
import Taskbar from "./MoreDetail/Taskbar";
import { CardDataContext } from "../../components/cardContext/CardContext";
import Steps from "./MoreDetail/Steps";

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
