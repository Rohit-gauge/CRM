import React from "react";
import { Modal } from "antd";
import { Select } from "antd";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import { Checkbox } from "antd";
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const { Option } = Select;

const FilterModal = ({ visible, onCancel }) => {
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
      className="rounded-sm my-custom-filter-class"
      width={440}
    >
      {/* Add your modal content here */}
      <div className="note-moadal-wrap call-modal rounded-sm ">
        <div className="mx-9">
          <div className="task-name  pt-6">
            <h2 className="font-semibold  py-1">Filters</h2>

            <h3 className=" text-blue-400 font-semibold  py-2">
              Filter by lead attributes
            </h3>

            <div className="lead-type py-2">
              <h3 className="font-semibold text-xs">Lead Type</h3>
              <div className="checkbox-wrap inline-flex">
                <div className="py-1 mr-2">
                  <Checkbox>Hot</Checkbox>
                </div>
                <div className="py-1 mr-2">
                  <Checkbox>Cold</Checkbox>
                </div>
                <div className="py-1">
                  <Checkbox>Warm</Checkbox>
                </div>
              </div>
            </div>


            <div className="lead-source">
              <h3 className="font-semibold text-xs">Lead Source</h3>
              <div className="checkbox-wrap inline-flex">
                <div className="py-1 mr-2">
                  <Checkbox>Website</Checkbox>
                </div>
                <div className="py-1 mr-2">
                  <Checkbox>Referrals</Checkbox>
                </div>
                <div className="py-1">
                  <Checkbox>Google Ads</Checkbox>
                </div>
              </div>
            </div>

            <div className="lead-created">
              <h3 className="font-semibold text-xs">Lead Created</h3>
              <div className="checkbox-wrap inline-flex">
                <div className="py-1 mr-2">
                  <Checkbox>Recent</Checkbox>
                </div>
                <div className="py-1 mr-2">
                  <Checkbox>Old</Checkbox>
                </div>
               
              </div>
            </div>

            <div className="lead-priority">
              <h3 className="font-semibold text-xs">Lead Priority</h3>
              <div className="checkbox-wrap inline-flex">
                <div className="py-1 mr-2">
                  <Checkbox>P1</Checkbox>
                </div>
                <div className="py-1 mr-2">
                  <Checkbox>P2</Checkbox>
                </div>
                <div className="py-1 mr-2">
                  <Checkbox>P3</Checkbox>
                </div>
               
              </div>
            </div>

            <div className="filter-lead-status py-4">
              <h3 className="text-blue-400 font-semibold  ">Filter by Lead Status</h3>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Qualified</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Unqualified</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Interest Level</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Old Lead</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap">
                <div className="py-1 mr-2">
                  <Checkbox>Deal Won</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Deal Lost</Checkbox>
                </div>
              </div>
            </div>


            <div className="filter-by-Action py-2">
              <h3 className="text-blue-400 font-semibold  ">Filter by Lead Action</h3>
             
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Email</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Call</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>SMS</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap">
                <div className="py-1 mr-2">
                  <Checkbox>Whatsapp</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Notes</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Task</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Tasks</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Created by me</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Created by Others</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Transfeered to me</Checkbox>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="notes-btn-wrap flex justify-center m-auto pb-10 mt-4 mx-9 ">
          
          <button className="cancel w-full bg-blue-400 text-white text-center cursor-pointer py-3 px-0  mr-3 rounded-sm font-semibold">
            Appy Filters
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
