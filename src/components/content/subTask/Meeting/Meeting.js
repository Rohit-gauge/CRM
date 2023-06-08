import React, { useState } from "react";
import { Col, Row } from "antd";
import AllMeet from "./AllMeet";

const Meeting = () => {
  const [activeTab, setActiveTab] = useState("allmeet");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div className="all-meet-wrap px-6 py-4">
      <Row>
        <Col
          span={6}
          onClick={() => handleClick("allmeet")}
          className={`taskbar-col text-center  ${
            activeTab === "allmeet"
              ? "border-b-2 text-blue-500 border-blue-500"
              : ""
          }`}
        >
          <button className="meet-btn text-center p-2">All</button>
        </Col>
      </Row>

      <div className="flex-1 py-4">
        {activeTab === "allmeet" && <AllMeet />}
      </div>
    </div>
  );
};

export default Meeting;
