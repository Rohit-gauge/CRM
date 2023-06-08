import React, { useState } from "react";
import { Steps, Select } from "antd";
import { HiUserGroup, HiCurrencyRupee } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";



const { Step } = Steps;
const { Option } = Select;

const App = () => {
  const [interestLevel, setInterestLevel] = useState("");
  const [qualified, setQualified] = useState("");
  const [deal, setDeal] = useState("");

  const steps = [
    {
      title: "Contacted",
      icon: <IoMdCall className="step-icon" />,
      completed: true,
    },
    {
      title: "Interest Level",
      icon: <AiFillStar className="step-icon" />,
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
          <Option value="Yes">May become interested at a certain point</Option>
          <Option value="No">Not interested at all</Option>
        </Select>
      ),
      renderIcon: () => {
        if (interestLevel === "No") {
          return <RxCrossCircled className="step-icon-cross" />;
        } else {
          return <AiFillStar className="step-icon" />;
        }
      },
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
          <Option value="Yes">Qualified</Option>
          <Option value="No">UnQualified</Option>
        </Select>
      ),
      renderIcon: () => {
        if (qualified === "No") {
          return <RxCrossCircled className="step-icon-cross" />;
        } else {
          return <AiFillStar className="step-icon" />;
        }
      },
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
      renderIcon: () => {
        if (deal === "No") {
          return <RxCrossCircled className="step-icon-cross" />;
        } else {
          return <AiFillStar className="step-icon" />;
        }
      },
    },
  ];

  const stepDates = [
    "1 Jun 2023",
    "2 Jun 2023",
    "3 Jun 2023",
    "4 Jun 2023",
    // Add more dates for each step as needed
  ];

  return (
    <div className="status-wrap  border-b-2 border-gray-300 mt-1 py-4 relative">
      <div className="status-content mx-2">
        <div className="steps-btn-wrap flex sm:px-9 space-x-4 pb-2">
          <div>
            <span className="text-sm deal-status text-gray-600 font-semibold">Deal Status</span>
          </div>
        </div>

        <Steps
          current={1}
          labelPlacement="vertical"
          responsive
          className="steps-container py-2"
        >
          {steps.map((item, index) => (
            <Step
              key={index}
              title={item.renderTitle || item.title}
              icon={
                <>
                  <div className="step-date py-2 text-center text-gray-500">
                    <h2>{stepDates[index]}</h2>
                    <h3 className="step-time ">3:30 pm</h3>
                  </div>
                  {item.renderIcon ? item.renderIcon() : item.icon}
                </>
              }
              className={`step ${item.completed ? "completed" : "not-completed"}`}
            />
          ))}
        </Steps>
      </div>
    </div>
  );
};

export default App;
