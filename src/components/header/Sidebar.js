import React from "react";
import { RxPencil2 } from "react-icons/rx";
import { HiUserGroup } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import DashboardSales from "../Pages/SalesDashboard";

const Sidebar = () => {
  return (
    <div className="test">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-blue-400focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-blue-400 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-26 h-screen transition-transform -translate-x-full sm:translate-x-0  "
        aria-label="Sidebar"
      >
      <div class="h-full px-3 py-4 overflow-y-auto bg-custom ">
      <ul class="space-y-2 font-medium pt-6">
         <li >
            <a href="#" class="flex items-center p-2 text-white rounded-lg  dark:text-black hover:bg-blue-400 dark:hover:bg-gray-700">
            <HiUserGroup />
               <span className="hidden sm:inline-block ml-3">Sales</span>
            </a>
         </li>

         <li>
            <a href="#" class="flex items-center p-2 text-white rounded-lg  dark:text-black hover:bg-blue-400 dark:hover:bg-gray-700">
            <RxPencil2 />
               <span className="hidden sm:inline-block ml-3">Support</span>
            </a>
         </li>
     
         <li>
            <a href="#" class="flex items-center p-2 text-white rounded-lg  dark:text-black hover:bg-blue-400 dark:hover:bg-gray-700">
            <FiSettings />
               <span className="hidden sm:inline-block ml-3">Settings</span>
            </a>
         </li>
     
     
        
       
        
         
      </ul>
   </div>
      </aside>

      <div className="sales-dashboard-wrap">
        <DashboardSales />
      </div>



    


    </div>
  );
};

export default Sidebar;
