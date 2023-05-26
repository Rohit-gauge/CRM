import React, { useState } from "react";
import { Steps, Select } from "antd";

const { Step } = Steps;
const { Option } = Select;

const TicketStatus = () => {
  const [interestLevel, setInterestLevel] = useState("");
  const [complaintAssessing, setComplaintAssessing] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [deal, setDeal] = useState("");

  const customDot = (dot, { status }) => {
    const circleStyle = { backgroundColor: status === "finish" ? "green" : "" };
    return <span className="ant-steps-icon-dot" style={circleStyle}></span>;
  };

  const steps = [
    {
      title: "chatbot",
      status: interestLevel === "No" ? "error" : "process",
      renderTitle: (
        <h2 className="default-title">chatbot</h2>
      ),
    },
    {
      title: "Complaint assessing",
      status: complaintAssessing ? "finish" : "process",
      renderTitle: (
        <Select
          defaultValue="Complaint assessing"
          bordered={false}
          className="select-title"
          style={{ whiteSpace: "nowrap" }}
          onChange={(value) => setComplaintAssessing(value === "Yes")}
        >
          <Option value="No">Complaint assessing</Option>
          <Option value="Yes">Qualified</Option>
        </Select>
      ),
    },
    {
      title: "Assign To",
      status: assignTo ? "finish" : "process",
      renderTitle: (
        <Select
          defaultValue="Assign To"
          bordered={false}
          className="select-title"
          style={{ whiteSpace: "nowrap" }}
          onChange={(value) => setAssignTo(value === "Yes")}
        >
          <Option value="No">PEG</Option>
          <Option value="Yes">Self</Option>
          <Option value="Backend">Backend</Option>
        </Select>
      ),
    },
    {
      title: "resolution",
      status: interestLevel === "No" ? "error" : "process",
      renderTitle: (
        <h2 className="default-title">Complaint resolution</h2>
      ),
    },
    {
      title: "closed",
      status: interestLevel === "No" ? "error" : "process",
      renderTitle: (
        <h2 className="default-title">Complaint Closed</h2>
      ),
    },
  ];

  return (
    <div className="status-wrap border-b-2 border-gray-300 pb-6 ">
      <div className="status-content mx-14 sm:mx-0 mt-7">
        <div className="steps-btn-wrap flex sm:px-11 pb-2">
          <div className="status-contact flex items-center pl-6">
            <span className="status-text font-semibold">Status</span>
            <button className="contact-lead mx-2">Connected</button>
          </div>
        </div>
        <Steps
          current={1}
          progressDot={customDot}
          responsive={true}
          direction="horizontal"
          size="small"
          className="steps-container mt-2"
        >
          {steps.map((step) => (
            <Step
              key={step.title}
              title={step.renderTitle ? step.renderTitle : step.title}
              status={step.status}
            />
          ))}
        </Steps>
      </div>
    </div>
  );
};

export default TicketStatus;
