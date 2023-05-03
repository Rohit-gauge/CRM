import React from "react";
import { Col, Row } from "antd";

const TaskDetails = ({cardData}) => {
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
    <>
      <Row>
        <Col span={6}>
          <div className="main-info-wrap">
            <div className="info-title">
            lead Type
            </div>
            <button  style={getButtonStyle(cardData.leadType)}
                className="rounded-2xl leadtype-btn"
              >
          {  cardData.leadType}
            </button>
          </div>
        </Col>
        <Col span={6}>
        <div className="main-info-wrap">
            <div className="info-title">
           Email Id
            </div>
          <div className="sub-info ">
          {cardData.email}
          </div>
          </div>
        </Col>
        <Col span={6}>  <div className="main-info-wrap">
            <div className="info-title">
          Contact Number
            </div>
          <div className="sub-info ">
          {cardData.contactNumber}
          </div>
          </div></Col>
        <Col span={6}>
        <div className="main-info-wrap">
            <div className="info-title">
           Lead Source
            </div>
          <div className="sub-info ">
          {cardData.leadSource}
          </div>
          </div>
        </Col>
        <Col span={6}>
        <div className="main-info-wrap">
            <div className="info-title">
           Lead Owner
            </div>
          <div className="sub-info ">
          {cardData.leadOwner}
          </div>
          </div>
        </Col>
        <Col span={6}>
        <div className="main-info-wrap">
            <div className="info-title">
           Lead Created
            </div>
          <div className="sub-info ">
          {cardData.leadCreated}
          </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TaskDetails;
