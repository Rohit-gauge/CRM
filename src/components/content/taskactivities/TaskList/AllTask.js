import React from "react";
import { Col, Row } from "antd";
import { HiDocumentText } from "react-icons/hi";
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";

const AllTask = () => {
  return (
    <div className="h-full overflow-auto mx-6">
      <div style={{ height: "400px", overflow: "auto" }}>
        <div className="mb-6 ">
          <div className="task-info-wrap rounded-lg shadow-md p-4 pb-4 relative mt-4">
            <Row>
              <Col span={24}>
                <div className=" p-2 px-4">

                  <div className="task-button-update flex absolute right-10 top-4 space-x-3">
                    <div className="edit"><BsPencilFill size={18} /></div>
                    <div className="del"><RiDeleteBin5Line size={19} className="text-red-500" /></div>
                  </div>
                  <div className="flex w-3/5 ">
                    <span>
                      {" "}
                      <HiDocumentText size={20} className="mt-1 text-blue-600 mr-1" />
                    </span>
                    <div>
                      <h2 className="font-bold text-md ">Set up a meeting with Harish Verma Tomorrow</h2>
                      <p className="mt-1">
                        {" "}
                        Jane expressed interest in the proposal during a phone call on March 11, 2023.
                      </p>
                    </div>{" "}

                  </div>
                </div>
              </Col>
            </Row>

           
            

            <Row>
              <Col span={6}>
                <div className="task-wrap p-2  pl-8">
                  <div className="task-description ">Priority Level</div>
                  <p className="danger"> High</p>
                </div>
              </Col>
              <Col span={6}>
                <div className="task-wrap p-2 text-center ">
                  <div className="task-description ">Due Date</div>
                  <p> 13th March 2022</p>
                </div>
              </Col>
              <Col span={6}>
                <div className="task-wrap p-2 text-center">
                  <div className="task-description ">Reminder </div>
                  <p> 30 Mins before</p>
                </div>
              </Col>
              <Col span={6}>
                <div className="task-wrap p-2 text-center">
                  <div className="task-description ">Created On</div>
                  <p>10th March 2022</p>
                </div>
              </Col>
            </Row>

            <div className="py-4 px-4 pl-8 ">
            
              <button className="task-complete-btn px-2 py-2 flex">  <span className="m-1"><AiOutlineCheck size={15} /></span>Task Completed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
