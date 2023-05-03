import React from "react";
import { Modal } from "antd";
import { Select } from "antd";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const { Option } = Select;

const TaskModal = ({ visible, onCancel }) => {
  const handleCancel = () => {
    onCancel();
  };
  const datePickerSuffixIcon = <AiFillCalendar className="text-blue-500" />;
  const timePickerSuffixIcon = <AiFillClockCircle className="text-blue-500" />;
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
          <h2 className="p-6">Create Task</h2>
        </div>

        <div className="mx-9">

        <div className="task-name  pt-6">
          <h2 className="font-semibold  py-2">Task Name</h2>
          <input
            type="text"
            className="border w-full border-gray-400 rounded-md p-1 "
          
          />
        </div>

        <div className="w-full   pb-7 rounded-lg">
          <h2 className="call-outcome font-semibold py-2">Priority</h2>

          <div className="outcome-option">
            <Select
              defaultValue="positive"
             
              //   onChange={handleChange}
              className=" rounded-md border-line  focus:outline-none w-full "
            >
              <Option value="positive">Positive</Option>
              <Option value="negative">Negative</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
            </Select>
          </div>
        </div>

        <div className="notes-btn-wrap flex  space-x-16 pb-7">
          <div className="date w-full  ">
            <h2 className="py-1 font-semibold">Date</h2>
            <DatePicker
          
              className="border  border-line "
              suffixIcon={datePickerSuffixIcon}
            />
          </div>
          <div className="timepicker w-full">
            <h2 className="py-1 font-semibold">Time</h2>
            <TimePicker
              className="border antialiased border-line text-gray-800"
              suffixIcon={timePickerSuffixIcon}
              defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
            />
          </div>
        </div>

        <div className="w-full    pb-7 rounded-lg">
          <h2 className="call-outcome font-semibold py-2">Reminder</h2>

          <div className="outcome-option">
            <Select
              defaultValue="positive"
              
              //   onChange={handleChange}
              className=" rounded-md border-line  focus:outline-none w-full "
            >
              <Option value="positive">30 mins before</Option>
              <Option value="negative">1hr before</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
            </Select>
          </div>
        </div>

        <div >
          <h2 className="py-2 font-semibold">Call Description</h2>
          <textarea className="w-full h-32  px-3 py-2 text-gray-700  border-line rounded-lg focus:outline-none focus:shadow-outline resize-none"></textarea>
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
            Create Task
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
