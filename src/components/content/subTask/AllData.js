import React from "react";
import {  Row, Col, Typography } from "antd";
import { HiDocumentText } from "react-icons/hi";
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import DealsTable from "../taskactivities/DealsTable/DealsTable";

const { Title } = Typography;

// Dummy data for meetings
const meetings = [
  {
    id: 1,
    title: "Follow Up",
    date: "2023-05-25",
    time: "10:00 pm - 4:30 pm",
    status: "completed",
  },
  {
    id: 2,
    title: "Project review",
    date: "2023-05-25",
    time: "14:00",
    status: "completed",
  },
  {
    id: 3,
    title: "Client meeting",
    date: "2023-05-06",
    time: "11:00",
    status: "on-going",
  },
  {
    id: 4,
    title: "Product demo",
    date: "2023-04-30",
    time: "15:00",
    status: "on-going",
  },
  {
    id: 5,
    title: "Sales meeting",
    date: "2023-04-06",
    time: "12:00",
    status: "completed",
  },
];

const AllData = () => {
  // Group meetings by date
  const groupedMeetings = meetings.reduce((acc, meeting) => {
    const date = meeting.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(meeting);
    return acc;
  }, {});

  // Get yesterday's date
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Format date to YYYY-MM-DD string
  const formatDateString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Get today's and yesterday's dates as strings
  const todayString = formatDateString(today);

  return (
    <div className="h-full overflow-y-auto md:mx-6 w-11/12 md:w-4/5  mx-auto">
      <div className="h-full">
        {/* Today's meetings */}

        <div className="data-wrap">
          <div className="title-all-data text-xs text-gray-400 flex justify-between pb-2">
            <div className="title-wrap">Notes</div>

            <div className="title-time">1 Jun 2023, 3:30pm</div>
          </div>

          <div className="notes-wrap ">
            <div className="mb-6  ">
              <div className="call-info-wrap rounded-lg shadow-md px-4 pb-4">
                <Row>
                  <Col span={24}>
                    <div className="flex  pt-4 pb-1 ">
                      <div className="w-full   ">
                        <h3 className="text-sm font-medium text-gray-700  ">
                          Created By{" "}
                        </h3>
                        <p className="text-gray-600 text-xs  call-time">
                          10th March 2022, 6:30 pm
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <div className="text-gray-600 ">
                      Interested in specific product features, send more
                      information.
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

        <div className="data-wrap">
          <div className="title-all-data text-xs text-gray-400 flex justify-between pb-2">
            <div className="title-wrap">Task</div>

            <div className="title-time">1 Jun 2023, 3:30pm</div>
          </div>

          <div className="mb-6 ">
          <div className="task-info-wrap rounded-lg shadow-md  pt-2 pb-4 relative ">
            <Row>
              <Col span={24}>
                <div className=" p-2 px-4">

                  <div className="task-button-update flex absolute lg:right-5 right-2 top-3 space-x-3">
                    <div className="edit"><BsPencilFill size={14} /></div>
                    <div className="del"><RiDeleteBin5Line size={15} className="text-red-500" /></div>
                  </div>
                  <div className="flex w-3/4 ">
                    <span>
                      {" "}
                      <HiDocumentText size={20} className="mt-1 text-blue-600 mr-1" />
                    </span>
                    <div>
                      <h2 className="font-bold text-sm text-gray-600 ">Set up a meeting with Harish Verma Tomorrow</h2>
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

        <div className="data-wrap">
          <div className="title-all-data text-xs text-gray-400 flex justify-between pb-2">
            <div className="title-wrap">Deal</div>

            <div className="title-time">3 Jun 2023, 3:30pm</div>
          </div>

          <div className="mb-6 ">
          <DealsTable />
        </div>
        </div>
      </div>
    </div>
  );
};

export default AllData;
