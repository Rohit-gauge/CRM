import React, { useState } from "react";
import { Steps, Select } from "antd";
import { HiUserGroup, HiCurrencyRupee } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";

const { Step } = Steps;
const { Option } = Select;

const App = () => {
  const [interestLevel, setInterestLevel] = useState("");
  const [qualified, setQualified] = useState("");
  const [deal, setDeal] = useState("");

  const steps = [
    {
      title: "New",
      icon: <HiUserGroup className="step-icon" />,
      completed: true,
    },
    {
      title: "Contacted",
      icon: <IoMdCall className="step-icon" />,
      completed: true,
    },
    {
      title: "Interest Level",
      icon: <BiTrendingUp className="step-icon" />,
      completed: interestLevel === "No" || interestLevel === "Yes",
      renderTitle: (
        <Select
          defaultValue="Interest Level"
          bordered={false}
          className="select-title"
          style={{ whiteSpace: "nowrap" }}
          onChange={(value) => setInterestLevel(value)}
        >
          <Option value="disabled" disabled>
            Interest Level
          </Option>
          <Option value="Yes">may become interested at a certain</Option>
          <Option value="No ">Not Interested at all</Option>
        </Select>
      ),
    },
    {
      title: "Qualified",
      icon: <AiFillStar className="step-icon" />,
      completed: qualified === "Yes",
      renderTitle: (
        <Select
          defaultValue="UnQualified"
          bordered={false}
          className="select-title"
          style={{ whiteSpace: "nowrap" }}
          onChange={(value) => setQualified(value)}
        >
          <Option value="No">UnQualified</Option>
          <Option value="Yes">Qualified</Option>
        </Select>
      ),
    },
    {
      title: "Deal Won/Lost",
      icon: <HiCurrencyRupee className="step-icon" />,
      completed: deal === "Yes",
      renderTitle: (
        <Select
          defaultValue="Deal Won/Lost"
          bordered={false}
          direction="horizontal"
          
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
  ];

  return (
    <div className="status-wrap border-b-2 border-gray-300">
      <div className="status-content mx-7 mt-7">
        <div className="steps-btn-wrap flex sm:px-11 space-x-4 pb-2">
          <div className="status-contact flex items-center ">
            <span className="status-text font-semibold">Deal</span>
            <select className="contact-lead deal-btn mx-2">
              <option value="Deal1">Deal1</option>
              <option value="Deal2">Deal2</option>
              <option value="Deal3">Deal3</option>
            </select>
          </div>
          <div className="status-contact flex items-center ">
            <span className="status-text font-semibold">Status</span>
            <button className="contact-lead mx-2">Contacted Lead</button>
          </div>

        </div>

        <Steps
          current={1}
          labelPlacement="vertical"
          responsive
          className="steps-container pt-4 lg:pr-20"
        >
          {steps.map((item, index) => (
            <Step
              key={index}
              title={item.renderTitle || item.title}
              icon={item.icon}
              className={`step ${item.completed ? "completed" : "not-completed"
                }`}
            />
          ))}
        </Steps>
      </div>
    </div>
  );
};

export default App;
