import React, { useState, useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineInbox } from 'react-icons/ai';
import { RxPencil2 } from 'react-icons/rx';
import { BiMenuAltLeft } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItem = [
    {
      path: '/',
      icon: <HiUserGroup />,
      text: 'Sales',
    },
    {
      path: '/support',
      icon: <RxPencil2 />,
      text: 'Support',
    },
    {
      path: '/analytics',
      icon: <AiOutlineInbox />,
      text: 'Dashboard',
    },
    {
      path: '/comment',
      icon: <FiSettings />,
      text: 'Settings',
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div
        className={`sidebar lg:bg-gray-800 text-gray-100 lg:py-4 py-4 px-3 lg:px-2 flex justify-between lg:block ${
          isMobileMenuOpen ? 'mobile-menu-open' : ''
        }`}
      >
        {/* Hamburger icon */}
        <div
          className={`lg:hidden cursor-pointer text-3xl relative ${
            scrollY === 0 ? '' : 'hidden'
          }`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <IoClose
              size={18}
              className="text-white absolute cursor-pointer -top-3 left-24"
            />
          ) : (
            <BiMenuAltLeft />
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
              <div className="icon">{item.icon}</div>
              <span className="text  text-sm ">{item.text}</span>
            </NavLink>
          ))}
        </ul>
      </div>

      <main className="main">{children}</main>
    </div>
  );
};

export default Sidebar;
