import React from "react";
import { Modal } from "antd";
import { Select } from "antd";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const { Option } = Select;

const CallModal = ({ visible, onCancel }) => {
  const datePickerSuffixIcon = <AiFillCalendar className="text-blue-500" />;
  const timePickerSuffixIcon = <AiFillClockCircle className="text-blue-500" />;

  // const datePickerPopupStyle = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)'
  // };
  const handleCancel = () => {
    onCancel();
  };
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      closable={false}
      maskClosable={true}
      className="rounded-sm my-custom-call-log-class"
      width={410}
    >
      {/* Add your modal content here */}
      <div className="note-moadal-wrap call-modal rounded-sm">

       
        <div className="header flex  justify-center items-center text-center bg-gray-200 rounded-sm">
          <h2 className="p-6">Add Call Log</h2>
        </div>
        <div className="mx-9">

        <div className="w-full  pb-7 rounded-lg">
       
          <h2 className="call-outcome font-semibold py-2">Call Outcome</h2>

          <div className="outcome-option">
            <Select
              defaultValue="positive"
             
              //   onChange={handleChange}
              className=" rounded-md border-line  focus:outline-none w-full   "
            >
              <Option value="positive">Positive</Option>
              <Option value="negative">Negative</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
            </Select>
          </div>
        </div>

        <div className="notes-btn-wrap flex pb-7 space-x-16 lg:space-x-16">
          <div className="date w-full ">
            <h2 className="py-1 font-semibold">Date</h2>
            <DatePicker
          //  popupStyle={datePickerPopupStyle}
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

        <div className=" ">
          <h2 className="py-2 font-semibold">Call Description</h2>
          <textarea className="w-full h-32  px-3 py-2 text-gray-700  border-line rounded-lg focus:outline-none focus:shadow-outline resize-none"></textarea>
        </div>

        <div className="notes-btn-wrap flex pb-10 mt-4 ">
        <button  onClick={handleCancel}  className="cancel w-1/2 text-blue-400  text-center cursor-pointer py-3 px-4 mr-2 rounded-sm font-semibold">
          Cancel
        </button>
        <button className="cancel w-1/2 bg-blue-400 text-white text-center cursor-pointer py-3 px-4 ml-2 mr-3 rounded-sm font-semibold">
         Save
        </button>
      </div>
      </div>
      </div>


    </Modal>
  );
};

export default CallModal;
