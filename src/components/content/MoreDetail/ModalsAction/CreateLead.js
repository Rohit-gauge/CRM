import React from "react";
import { Modal, Row, Col } from "antd";
import { Select } from "antd";

import dayjs from "dayjs";
import { CloseOutlined } from "@ant-design/icons";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const { Option } = Select;
const CreateLead = ({ visible, onCancel }) => {

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      closable={true}
      maskClosable={true}
      closeIcon={<CloseOutlined />}
      className="rounded-sm "
      width={600}
    >
      {/* Add your modal content here */}
      <div className="note-moadal-wrap call-modal rounded-sm">
        <div className="header flex  justify-center items-center text-center bg-gray-200 rounded-sm">
          <h2 className="p-6">Create a Lead</h2>
          
        </div>

        <div className="mx-9">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            <div className="task-name pt-3">
              <h2 className="font-semibold py-2">First Name</h2>
              <input
                type="text"
                className="border w-full border-gray-400 rounded-md p-1"
              />
            </div>
            <div className="task-name pt-3">
              <h2 className="font-semibold py-2">Last Name</h2>
              <input
                type="text"
                className="border w-full border-gray-400 rounded-md p-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            <div className="w-full pt-3 rounded-lg">
              <h2 className="call-outcome font-semibold py-2">Lead Type</h2>
              <div className="outcome-option">
                <select
                  defaultValue="positive"
                  className="rounded-md p-1 border-line focus:outline-none w-full"
                >
                  <option value="disabled" disabled>
                    Lead Type
                  </option>
                  <option value="positive">Hot Lead</option>
                  <option value="negative">Cold Lead</option>
                  <option value="positive">Warm Lead</option>
                </select>
              </div>
            </div>
            <div className="task-name pt-3">
              <h2 className="font-semibold py-2">Contact Number</h2>
              <input
                type="text"
                className="border w-full border-gray-400 rounded-md p-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            <div className="task-name pt-3">
              <h2 className="font-semibold py-2">Email Id</h2>
              <input
                type="text"
                className="border w-full border-gray-400 rounded-md p-1"
              />
            </div>
            <div className="task-name pt-3">
              <h2 className="font-semibold py-2">Lead Source</h2>
              <input
                type="text"
                className="border w-full border-gray-400 rounded-md p-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            <div className="task-name pt-3">
              <h2 className="font-semibold py-2">Location</h2>
              <input
                type="text"
                className="border w-full border-gray-400 rounded-md p-1"
              />
            </div>
            <div className="task-name pt-3">
              <h2 className="font-semibold py-2">Lead Owner</h2>
              <input
                type="text"
                className="border w-full border-gray-400 rounded-md p-1 bg-gray-100 cursor-not-allowed"
                placeholder="Mathew"
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            <div className="task-name pt-3">
              <h2 className="font-semibold py-2">Lead Created On</h2>
              <input
                type="text"
                className="border w-full border-gray-400 rounded-md p-1 bg-gray-100 cursor-not-allowed"
                placeholder="28 dec 2022"
                readOnly
              />
            </div>
          
          </div>


          <div className="create-lead-btn flex m-auto w-fit p-8 ">
            <button className="w-full text-white bg-blue-400 text-center cursor-pointer py-4 px-10 rounded-lg hover:bg-blue-500 transition-colors duration-300">
              Create Lead
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateLead;
