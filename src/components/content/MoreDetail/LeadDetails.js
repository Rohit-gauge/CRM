import React, { useState } from "react";
import { Row, Col } from "antd";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const LeadDetails = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mt-4">
      <div className="pr-10 pb-4 lg:mx-12 mx-4">
        <Row>
          <Col xs={12} sm={6}>
            <div className={`main-info-wrap ${expanded ? "" : "hidden"}`}>
              <div className="info-title">Email Id</div>
              <div className="sub-info">harish@gmail.com</div>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className={`main-info-wrap ${expanded ? "" : "hidden"}`}>
              <div className="info-title">Contact Number</div>
              <div className="sub-info">991991911</div>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className={`main-info-wrap ${expanded ? "" : "hidden"}`}>
              <div className="info-title">Lead Source</div>
              <div className="sub-info">Website</div>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className={`main-info-wrap ${expanded ? "" : "hidden"}`}>
              <div className="info-title">Lead Owner</div>
              <div className="sub-info">harish</div>
            </div>
          </Col>
          {expanded && (
            <>
              <Col xs={12} sm={6}>
                <div className="main-info-wrap">
                  <div className="info-title">Lead Created</div>
                  <div className="sub-info">2022-03-05</div>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="main-info-wrap">
                  <div className="info-title">Pincode</div>
                  <div className="sub-info">110066</div>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="main-info-wrap">
                  <div className="info-title">Job Function</div>
                  <div className="sub-info">create</div>
                </div>
              </Col>
            </>
          )}
        </Row>

        <div className="  text-sm show-more">
          <button className="inline-flex items-center text-xs md:text-sm text-blue-500" onClick={handleExpand}>
            <span>{expanded ? "Show less" : "Show more"}</span>
            <span className="ml-1">
              {expanded ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
