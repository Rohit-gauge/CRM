import React, { useState } from "react";
import { Steps, Select } from "antd";
import { BiCheckCircle } from "react-icons/bi";

const { Step } = Steps;
const { Option } = Select;

const TicketStatus = () => {
  const [interestLevel, setInterestLevel] = useState("");
  const [qualified, setQualified] = useState("");
  const [deal, setDeal] = useState("");

  const customDot = (dot, { status }) => {
    return status === "finish" ? (
      <BiCheckCircle style={{ fontSize: "24px", color: "green" }} />
    ) : (
      dot
    );
  };

  const steps = [
    {
      title: "chatbot",
      status: interestLevel === "No" ? "error" : "process",
      renderTitle: (
        <h2
         
          className="default-title  "
        
        >
          chatbot
        
        </h2>
      ),
    },
    {
        title: "Complaint assessing",
        status: qualified === "Yes" ? "finish" : "process",
        renderTitle: (
          <Select
            defaultValue=" Complaint assessing"
            bordered={false}
            className="select-title"
            style={{ whiteSpace: "nowrap" }}
            onChange={(value) => setQualified(value)}
          >
            <Option value="No"> Complaint assessing</Option>
            <Option value="Yes">Qualified</Option>
          </Select>
        ),
      },
   
    {
      title: "Assign To",
      status: qualified === "Yes" ? "finish" : "process",
      renderTitle: (
        <Select
          defaultValue="Assign To"
          bordered={false}
          className="select-title"
          style={{ whiteSpace: "nowrap" }}
          onChange={(value) => setQualified(value)}
        >
          <Option value="No">Assign To</Option>
          <Option value="Yes">Qualified</Option>
        </Select>
      ),
    },

    {
      title: "Complaint resolution",
      status: deal === "Yes" ? "finish" : "process",
      renderTitle: (
        <Select
          defaultValue="Complaint resolution"
          bordered={false}
          className="select-title"
          style={{ whiteSpace: "nowrap" }}
          onChange={(value) => setDeal(value)}
        >
          <Option value="disabled" disabled>
            Deal Won/Lost
          </Option>
          <Option value="Yes">Deal Won</Option>
          <Option value="No">Deal Lost</Option>
        </Select>
      ),
    },
    {
        title: "closed",
        status: interestLevel === "No" ? "error" : "process",
        renderTitle: (
          <h2
           
            className="default-title  "
          
          >
            Complaint Closed
          
          </h2>
        ),
      },
  ];

  return (
    <div className="status-wrap border-b-2 border-gray-300 pb-6">
      <div className="status-content  mt-7">
        <div className="steps-btn-wrap flex sm:px-11  pb-2">
          <div className="status-contact flex items-center pl-6  ">
            <span className="status-text font-semibold">Status</span>
            <button className="contact-lead mx-2">Contacted Lead</button>
          </div>
        </div>
        <Steps
          current={1}
          progressDot={customDot}
          responsive={true}
          direction="horizontal"
          size="small"
          className="steps-container"
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





