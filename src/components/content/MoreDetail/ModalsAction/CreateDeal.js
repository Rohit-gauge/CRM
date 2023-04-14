import React from "react";
import { Modal } from "antd";
import { Select } from "antd";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import { AiFillCalendar } from "react-icons/ai";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const { Option } = Select;
const CreateDeal = ({ visible, onCancel }) => {
  const handleCancel = () => {
    onCancel();
  };
  const datePickerSuffixIcon = <AiFillCalendar className="text-blue-500" />;
  // const timePickerSuffixIcon = <AiFillClockCircle className="text-blue-500" />;
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      closable={false}
      maskClosable={true}
      className="rounded-sm my-custom-call-class"
      width={410}
    >
      {/* Add your modal content here */}
      <div className="note-moadal-wrap call-modal rounded-sm">
        <div className="header flex  justify-center items-center text-center bg-gray-200 rounded-sm">
          <h2 className="p-6">Create a Deal</h2>
        </div>

        <div className="mx-9">

        <div className="task-name  pt-6">
          <h2 className="font-semibold  py-2">Deal Title</h2>
          <input
            type="text"
            className="border w-full border-gray-400 rounded-md p-1 "
           
          />
        </div>

        <div className="task-name  pt-6">
          <h2 className="font-semibold  py-2">Deal Stage</h2>
          <input
            type="text"
            className="border w-full border-gray-400 rounded-md p-1 "
            
          />
        </div>

        <div className="w-full    py-5 pb-7 rounded-lg">
          <h2 className="call-outcome font-semibold py-2">Deal Amount</h2>

          <div className="outcome-option">
            <Select
              defaultValue="positive"
              
              //   onChange={handleChange}
              className=" rounded-md border-line  focus:outline-none w-full"
            >
              <Option value="positive">Rs 10,000</Option>
              <Option value="negative">Rs 15,000</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
            </Select>
          </div>
        </div>

        <div className="w-full    pb-7 rounded-lg">
          <h2 className="call-outcome font-semibold py-2">Order Quantity</h2>

          <div className="outcome-option">
            <Select
              defaultValue="positive"
             
              //   onChange={handleChange}
              className=" rounded-md border-line  focus:outline-none w-full"
            >
              <Option value="positive">1</Option>
              <Option value="negative">2</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
            </Select>
          </div>
        </div>

        <div className="task-name  pb-5 ">
          <h2 className="font-semibold  py-2">Order Anount</h2>
          <input
            type="text"
            className="border w-full border-gray-400 rounded-md p-1 "
          
            placeholder="Rs 10,000"
          />
        </div>

        <div className="notes-btn-wrap flex  pb-7">
          <div className="date w-full  ">
            <h2 className="py-2 font-semibold">Expecting Closing Date </h2>
            <DatePicker
              //  popupStyle={datePickerPopupStyle}
              className="border  border-line w-full  "
              suffixIcon={datePickerSuffixIcon}
            />
          </div>
        </div>
        </div>

        <div className="notes-btn-wrap flex pb-10 mt-4 mx-9 ">
          <button
            onClick={handleCancel}
            className="cancel w-1/2 text-blue-400  text-center cursor-pointer py-3 px-4 mr-2 rounded-sm font-semibold"
          >
            Cancel
          </button>
          <button className="cancel w-1/2 bg-blue-400 text-white text-center cursor-pointer py-3 px-4 ml-2 mr-3 rounded-sm font-semibold">
            Create Deal
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateDeal;
