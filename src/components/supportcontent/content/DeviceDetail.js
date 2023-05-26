import React, { useState } from "react";
import { Col, Row } from "antd";
import Notification from "../Notification/Notificaiton";
import DeviceHealth from "../devicehealth/DeviceHealth";
import Analytics from "../Analytics/Analytics";


const DeviceDetail = ({supportData}) => {
    const [activeTab, setActiveTab] = useState("notification");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
    return (
        // <div className=' device-detail-wrap sm:mx-11 m-6 grid grid-cols-1 sm:gap-6 md:grid-cols-2'>

        //     <div className="notification-history-wrap m-2 p-6 ">
        //         <div className="notification-heading flex rounded-sm justify-center m-auto">
        //             <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-400 shadow-sm">
        //                 <MdNotifications class="text-white" size={20} />
        //             </span>
        //             <h2 className='text-blue-400 flex items-center px-2'>Notification History</h2>
        //         </div>

        //         <div className="notify-time text-center pb-3">
        //             12th March
        //         </div>

        //         <div className="small-card-wrap bg-blue-300 rounded-md p-4 mb-2">
        //             <div className='flex justify-between'>
        //             <h3 className='font-semibold text-md'>TDS Levels are high</h3>
        //             <span className='time text-sm text-gray-400'>2:30</span>
        //             </div>
                    
        //             <div className='text-sm font-extralight'>Your RO system is producing high TDS levels.</div>
        //         </div>
        //         <div className="small-card-wrap rounded-md mb-2 p-4 bg-blue-300">
        //         <div className='flex justify-between'>
        //         <h3 className='font-semibold text-md'>Sediment filter expiring</h3>
        //             <span className='time text-sm text-gray-400'>2:30</span>
        //             </div>
                  
        //             <p className='text-sm'>Your Sediment filter is expiring next month</p>
        //         </div>

        //         <div className="view-more-btn flex justify-center mt-4  ">
        //             <button className=' p-2  w-full bg-blue-400 text-white rounded-md'>View More</button>
        //         </div>

        //     </div>
        //     <div className="notification-history-wrap d-health-wrap m-2 p-6 ">
        //         <div className="notification-heading flex rounded-sm justify-center m-auto">
        //             <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-400 shadow-sm">
        //                 <CiMobile2 class="text-white" size={20} />
        //             </span>
        //             <h2 className='text-blue-400 flex items-center px-2'>Device Heath</h2>
        //         </div>

        //         <div className="device-health-image">

        //         </div>

              

        //         <div className="view-more-btn flex justify-center mt-4 ">
        //             <button className=' p-2 w-full  bg-blue-400 text-white rounded-md'>View More</button>
        //         </div>

        //     </div>

           

        // </div>
        <>
        <div className="all-meet-wrap px-6 py-4 sm:ml-10">
      <Row>
        <Col
          span={6}
          onClick={() => handleClick("notification")}
          className={`taskbar-col text-center  ${
            activeTab === "notification"
              ? "border-b-2 text-blue-500 border-blue-500"
              : ""
          }`}
        >
          <button className=" meet-btn text-center p-2">Notification</button>
        </Col>
        <Col
          span={6}
          onClick={() => handleClick("devicehealth")}
          className={`taskbar-col text-center ${
            activeTab === "devicehealth"
              ? "border-b-2 text-blue-500  border-blue-500 ml-6"
              : "pl-4"
          }`}
        >
          <button className=" meet-btn  text-center  p-2 text-gray-700">
          Health
          </button>
        </Col>
        <Col
          span={6}
          onClick={() => handleClick("subject")}
          className={`taskbar-col text-center ${
            activeTab === "subject"
              ? "border-b-2 text-blue-500 border-blue-500 ml-6"
              : "pl-4"
          }`}
        >
          <button className=" meet-btn text-center  p-2">Analytics</button>
        </Col>
      </Row>

      <div className="flex-1 py-4">
        {activeTab === "notification" && <Notification />}
        {activeTab === "devicehealth" && <DeviceHealth />}
        {activeTab === "subject" && <Analytics/>}
      </div>
    </div>
        </>
    )
}

export default DeviceDetail