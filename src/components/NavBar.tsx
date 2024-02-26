import React, { useEffect, useState } from 'react';
import Edigo from '../assets/EdigoLogo.svg'
import profileIcon from '../assets/profileIcon.svg'
import searchIcon from '../assets/searchIcon.svg'
import collaboratorsIcon from '../assets/collaboratorsIcon.svg'
import iGIcon from '../assets/igIcon.svg'


const Navbar: React.FC = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial render

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="hidden md:flex w-full bg-black justify-end items-center h-8">
        <ul className="flex space-x-2">
          <li><img src={iGIcon} alt="iGIcon" className="cursor-pointer h-4 ml-1 mt-1  opacity-50" /></li>
          <li><img src={collaboratorsIcon} alt="Collaborators" className="cursor-pointer h-4 mt-1 mr-5  opacity-50" /></li>
        </ul>
      </div>

      <nav className="bg-black border-b border-black  md:bg-white md:mt-1 py-2 ">
        {!isMobile && (
          <div className="flex justify-center md:justify-between mb-1 md:mx-2">
            <img src={Edigo} alt="" className="cursor-pointer h-8 mt-1 md:mt-0" />
            <ul className="flex space-x-4">
              <li><img src={searchIcon} alt="Search" className="cursor-pointer h-6 mt-1 md:filter-none" /></li>
              <li><img src={profileIcon} alt="Profile" className="cursor-pointer h-6 ml-1 mt-1 md:mr-3 md:filter-none" /></li>
            </ul>
          </div>
        )}
        {isMobile && <MobileNavBar />}
      </nav>
    </>
  );
};

const MobileNavBar: React.FC = () => {
  return (
    <>
      <div>
        <ul className='flex justify-between filter invert px-5'>
          <li><img src={searchIcon} alt="Search" className="cursor-pointer h-6 mt-1 md:filter-none " /></li>
          <li><img src={Edigo} alt="" className="cursor-pointer h-8 mt-1 md:mt-0" /></li>
          <li><img src={profileIcon} alt="Profile" className="cursor-pointer h-6 ml-1 mt-1 md:mr-3 md:filter-none" /></li>
        </ul>
      </div>
    </>
  );
};



export default Navbar;
