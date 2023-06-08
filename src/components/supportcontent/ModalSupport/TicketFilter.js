import React from "react";
import { Modal } from "antd";

import { Checkbox } from "antd";




const TicketFilter = ({ visible, onCancel }) => {
 
  
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      closable={false}
      maskClosable={true}
      className="rounded-sm "
      width={440}
    >
      {/* Add your modal content here */}
      <div className="note-moadal-wrap call-modal rounded-sm ">
        <div className="mx-9">
          <div className="task-name  pt-6">
            <h2 className="font-semibold  py-1">Filters</h2>

          

           


         

         

         

            <div className="filter-lead-status py-4">
              <h3 className="text-blue-400 font-semibold  ">Filter by Ticket Status</h3>
             
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Not opened</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Unresolved</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Unassigned</Checkbox>
                </div>
              </div>
            
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Resolution</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap">
                <div className="py-1 mr-2">
                  <Checkbox>Assesed</Checkbox>
                </div>
              </div>
            </div>


            <div className="filter-by-ownership py-2">
              <h3 className="text-blue-400 font-semibold  ">Filter by Ticket Ownership</h3>
             
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>PEG</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Backend</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap ">
                <div className="py-1 mr-2">
                  <Checkbox>Agent</Checkbox>
                </div>
              </div>
              <div className="checkbox-wrap">
                <div className="py-1 mr-2">
                  <Checkbox>Created by me</Checkbox>
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

export default TicketFilter;
