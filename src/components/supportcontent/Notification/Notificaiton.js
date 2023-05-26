import React from 'react'
import { MdNotifications } from "react-icons/md";

const Notificaiton = () => {
  return (
   <div className='sm:w-3/4  mt-4'>
     <div className="notification-history-wrap m-2 p-6 ">
                <div className="notification-heading flex rounded-sm justify-center m-auto">
                    <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-400 shadow-sm">
                        <MdNotifications class="text-white" size={20} />
                    </span>
                    <h2 className='text-blue-400 flex items-center px-2'>Notification History</h2>
                </div>

                <div className="notify-time text-center pb-3">
                    12th March
                </div>

                <div className="small-card-wrap bg-blue-300 rounded-md p-4 sm:mx-4 mb-2">
                    <div className='flex justify-between'>
                    <h3 className='font-semibold text-md'>TDS Levels are high</h3>
                    <span className='time text-sm text-gray-400'>2:30</span>
                    </div>
                    
                    <div className='text-sm font-extralight'>Your RO system is producing high TDS levels.</div>
                </div>
                <div className="small-card-wrap rounded-md mb-2 sm:mx-4 p-4 bg-blue-300">
                <div className='flex justify-between'>
                <h3 className='font-semibold text-md'>Sediment filter expiring</h3>
                    <span className='time text-sm text-gray-400'>2:30</span>
                    </div>
                  
                    <p className='text-sm'>Your Sediment filter is expiring next month</p>
                </div>

                <div className="view-more-btn flex justify-center mt-4  ">
                    <button className=' p-4  w-fit px-8 bg-blue-400 text-white rounded-md'>View More</button>
                </div>

            </div>
           
   </div>
  )
}

export default Notificaiton