import React, { useState } from 'react';
import { navLinks } from '../../constants/Index';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/' className='font-bold text-xl hidden lg:block'>
          <img
            src='data:image/png;base64,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'
            alt='logo'
            // width={600}
            // height={36}
            className='m-0 w-[200px] h-[40px] relative'
          />
        </a>
        <div
          className='lg:hidden cursor-pointer p-2'
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <div className={`w-6 h-0.5 bg-gray-800 my-1 transition-transform ${menuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 my-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 my-1 transition-transform ${menuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } lg:flex lg:flex-1 flex justify-center items-center gap-16 max-lg`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;