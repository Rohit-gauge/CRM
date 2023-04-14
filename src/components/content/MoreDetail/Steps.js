import React from "react";
import { Steps, Select } from "antd";
import {
  HiUserGroup,
  HiCurrencyRupee
} from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";


const { Step } = Steps;
const { Option } = Select;

const steps = [
  {
    title: "New",
    icon: <HiUserGroup className="step-icon" />,
    completed: true
  },
  {
    title: "Contacted",
    icon: <IoMdCall className="step-icon" />,
    completed: true
  },
  {
    title: "Interest Level",
    icon: <BiTrendingUp className="step-icon" />,
    completed: false,
    renderTitle: (
      <Select
        defaultValue="Interest Level"
        bordered={false}
        className="select-title"
      >
        <Option value="No">Not Interested at all</Option>
        <Option value="Yes ">may become interested at a certain</Option>
      </Select>
    )
  },
  {
    title: "Qualified",
    icon: <AiFillStar className="step-icon" />,
    completed: false,
    renderTitle: (
      <Select
        defaultValue="Qualified"
        bordered={false}
        className="select-title"
      >
        <Option value="No">Qualified</Option>
        <Option value="Yes">UnQualified</Option>
      </Select>
    )
  },
  {
    title: "Deal Won/Lost",
    icon: <HiCurrencyRupee className="step-icon" />,
    completed: false,
    renderTitle: (
      <Select
        defaultValue="Deal Won/Lost"
        bordered={false}
        className="select-title"
      >
        <Option value="Lost">Deal Won</Option>
        <Option value="Won">Deal Lost</Option>
      </Select>
    )
  }
];

const App = () => (
  <div className="status-wrap border-b-2 border-gray-300">
    <div className="status-content mx-9 mt-7">
      <div className="status-contact px-11">
        <span className="status-text font-semibold">Status</span>
        <button className="contact-lead mx-2">Contacted Lead</button>
      </div>
      <Steps
        current={1}
        labelPlacement="vertical"
        responsive
        className="steps-container pt-4 lg:pr-20"
      >
        {steps.map((step, index) => (
          <Step
            key={index}
            title={step.renderTitle || step.title}
            icon={step.icon}
            className={`step ${step.completed ? "completed" : ""}`}
          />
        ))}
      </Steps>
      <br />
    </div>
  </div>
);

export default App;
