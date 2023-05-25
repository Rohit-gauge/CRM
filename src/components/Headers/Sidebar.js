import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineInbox } from 'react-icons/ai';
import { RxPencil2 } from 'react-icons/rx';
import { HiMenu } from 'react-icons/hi';
import { HiUserGroup } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItem = [
    {
      path: '/',
      icon: <HiUserGroup />,
    },
    {
      path: '/support',
      icon: <RxPencil2 />,
    },
    {
      path: '/analytics',
      icon: <AiOutlineInbox />,
    },
    {
      path: '/comment',
      icon: <FiSettings />,
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div >
      <div className={`sidebar lg:bg-gray-800 text-gray-100 lg:py-4 py-4 px-3 lg:px-2 flex justify-between lg:block ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        {/* <div className="text-xl font-bold">Sidebar</div> */}
        {/* Hamburger icon */}
        <div
          className="lg:hidden cursor-pointer text-3xl relative"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <IoClose size={18} className='text-white absolute cursor-pointer -top-3 left-4 ' />
          ) : (
            <HiMenu />
          )}
        </div>
        {/* Menu items */}
        <ul
          className={`pt-4 lg:pt-2 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:block`}
        >
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link py-2 px-4 flex hover:bg-gray-700 rounded transition duration-200"
              activeclassname="active bg-gray-700"
            >
              <div className="icon ">{item.icon}</div>
             
            </NavLink>
          ))}
        </ul>
      </div>

      <main className="main">{children}</main>

    </div>
  );
};

export default Sidebar;
