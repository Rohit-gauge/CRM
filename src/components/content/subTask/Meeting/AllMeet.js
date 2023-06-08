import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { HiDocumentText } from 'react-icons/hi'
import { BsThreeDotsVertical } from "react-icons/bs";

const { Title } = Typography;

// Dummy data for meetings
const meetings = [
  {
    id: 1,
    title: "Follow Up",
    date: "2023-06-01",
    time: "10:00 pm - 4:30 pm",
    status: "completed",
  },
  {
    id: 2,
    title: "Project review",
    date: "2023-05-0",
    time: "14:00",
    status: "completed",
  },
  {
    id: 3,
    title: "Client meeting",
    date: "2023-04-16",
    time: "11:00",
    status: "on-going",
  },
  {
    id: 4,
    title: "Product demo",
    date: "2023-04-67",
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

const AllMeet = () => {
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
  const yesterdayString = formatDateString(yesterday);

  return (
    <>
      <div className="h-full overflow-auto mb-10 ">
        <div style={{ height: "400px", overflow: "auto" }}>
          {/* Today's meetings */}

          <div className="meetings-container mb-4 mt-4">
            {/* Today's meetings */}
            <div className={` mb-2`}>
              <Title level={5}>Today</Title>
             
              <Row>
              {groupedMeetings[todayString] &&
                  groupedMeetings[todayString].map((meeting) => (
                    <Col key={meeting.id} xs={24} lg={22}>
                      <Card
                        className={`today-meeting ${meeting.status}`}
                       
                      >
                        <div className="card-meet-wrap relative ">
                        {/* <div className="dot-icon absolute -top-3 -right-3">
                      <BsThreeDotsVertical />
                    </div> */}
                    <div className="left-wrap w-1/2">
                    <div className="title font-bold">{meeting.title}</div>
                          <p className="mb-3 font-normal text-xs md:text-md text-gray-700">Highlight unique selling points</p>
                          <p className="text-blue-500 font-normal">
                            {" "}
                            {meeting.time}
                          </p>
                          <button className="mb-3 bg-blue-400 mt-1  px-3 rounded-2xl hover:bg-blue-700 text-white flex"><span>1</span> <HiDocumentText className="mt-1" /></button>
                    </div>
                        
                          <div className="absolute right-0 top-0">
                            <div className="buttons-wrap flex flex-col">
                              <button className="mb-3 text-blue-500 font-semibold">
                                + Add note
                              </button>

                              <button
                                href={meeting.link}
                                className="bg-blue-400 hover:bg-blue-700 text-white font-semibold py-1 px-5 mt-2 rounded-sms"
                              >
                                Join
                              </button>

                              
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </div>

            {/* Yesterday's meetings */}
            {groupedMeetings[yesterdayString] && (
              <div className={`yesterday-meeting mb-4 mt-4`}>
                <Title level={5}>Yesterday</Title>
                <Row>
                {groupedMeetings[yesterdayString].map((meeting) => (
                    <Col key={meeting.id} xs={24} lg={22}>
                      <Card
                        className={`meeting-card ${meeting.status}`}
                       
                      >
                        <div className="card-meet-wrap relative ">
                        <div className="dot-icon absolute -top-3 -right-3">
                      <BsThreeDotsVertical />
                    </div>
                          <div className="title   font-bold">{meeting.title}</div>
                          <p className="mb-3 font-normal">Highlight unique selling points</p>
                          <p className="text-blue-500 font-normal">
                            {" "}
                            {meeting.time}
                          </p>
                          <button className="mb-3 bg-blue-400 mt-1  px-3 rounded-2xl hover:bg-blue-700 text-white flex"><span>1</span> <HiDocumentText className="mt-1" /></button>
                       

                        <div className="absolute right-5 top-0">
                            <div className="buttons-wrap flex flex-col">
                              <button className="mb-3 text-blue-500 font-semibold">
                                + Add note
                              </button>

                              <button
                                href={meeting.link}
                                className="bg-red-400 hover:bg-blue-700 text-white font-semibold py-1 px-5 mt-2 rounded-sms"
                              >
                               Ended
                              </button>

                              
                            </div>
                            </div>
                            </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            )}

            {/* Upcoming meetings */}
            <div className={`mb-4`}>
              <Title level={5}>Upcoming</Title>
              {Object.keys(groupedMeetings)
                .filter(
                  (date) => date !== todayString && date !== yesterdayString
                )
                .map((date) => (
                  <div key={date} className="mb-2">
                    <Row>
                    {groupedMeetings[date].map((meeting) => (
                        <Col key={meeting.id} xs={24} lg={22}>
                          <Card
                           className={`upcoming-meeting  ${meeting.status}`}
                            
                          >
                            <div className="card-meet-wrap">
                              <div className="title font-semibold">{meeting.title}</div>

                              <p> {meeting.time}</p>
                            </div>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMeet;
