import React from 'react'

import { CiMobile2 } from "react-icons/ci";

const DeviceHealth = () => {
  return (
   <div className='sm:w-3/4 w-1/2  mt-4'>
     <div className="notification-history-wrap d-health-wrap m-2 p-6  ">
                <div className="notification-heading flex rounded-sm justify-center m-auto">
                    <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-400 shadow-sm">
                        <CiMobile2 class="text-white" size={20} />
                    </span>
                    <h2 className='text-blue-400 flex items-center px-2'>Device Heath</h2>
                </div>

                <div className="device-health-image">

                </div>

              

                <div className="view-more-btn flex justify-center mt-4 ">
                    <button className=' p-4 px-8 w-fit bg-blue-400 text-white rounded-md'>View More</button>
                </div>

            </div>

           

        
   </div>
  )
}

export default DeviceHealth