import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineInbox } from 'react-icons/ai';
import { RxPencil2 } from 'react-icons/rx';
import { HiUserGroup } from 'react-icons/hi';
import { HiMenu } from 'react-icons/hi';
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
      path: '/about',
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
    <div className="container flex flex-col md:flex-row">
      <div className={`sidebar lg:bg-gray-800 text-gray-100 lg:py-4 py-4 px-6 lg:px-2 flex justify-between md:block ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        {/* <div className="text-xl font-bold">Sidebar</div> */}
        {/* Hamburger icon */}
        <div
          className="md:hidden cursor-pointer text-3xl relative"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <IoClose size={20} className='text-white absolute cursor-pointer -top-3 left-10 ' />
          ) : (
            <HiMenu />
          )}
        </div>
        {/* Menu items */}
        <ul
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link py-2 px-2 flex hover:bg-gray-700 rounded transition duration-200"
              activeClassName="active bg-gray-700"
            >
              <div className="icon ">{item.icon}</div>
              {/* <div className="text-sm font-medium">
                {item.path}
              </div> */}
            </NavLink>
          ))}
        </ul>
      </div>

      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default Sidebar;
