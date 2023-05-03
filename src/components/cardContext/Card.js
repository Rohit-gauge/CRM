import React from "react";

const Card = ({ cardData, handleCardSelection }) => {
    const getButtonStyle = (text) => {
        let buttonStyle = {
          backgroundColor: "#000000", // Default color
          color: "#FFFFFF", // Default text color
        };
        if (text === "Cold Lead") {
          buttonStyle.backgroundColor = "#C7FDBE";
          buttonStyle.color = "#2e8a2c";
        } else if (text === "Hot Lead") {
          buttonStyle.backgroundColor = "#FDC1BE";
          buttonStyle.color = "#8A3D2C";
        } else if (text === "Warm Lead") {
          buttonStyle.backgroundColor = "#FDD8BE";
          buttonStyle.color = "#8A4E2C";
        }
        return buttonStyle;
      };

  return (
    <div className="card" onClick={() => handleCardSelection(cardData)}>
      <div className="card-header">
        <div className="card-title">{cardData.title}</div>
      </div>
      <div className="card-body">
        <div className="card-info">
          <div className="card-info-label">Email:</div>
          <div className="card-info-value">{cardData.email}</div>
        </div>
        <div className="card-info">
          <div className="card-info-label">Contact Number:</div>
          <div className="card-info-value">{cardData.contactNumber}</div>
        </div>
        <button
          className="card-button"
          style={getButtonStyle(cardData.leadType)}
        >
          {cardData.leadType}
        </button>
      </div>
    </div>
  );
};

export default Card;
