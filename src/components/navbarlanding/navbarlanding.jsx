import React from "react";
import logo from "../../assets/examplelogo.png";

const NavbarLanding = () => {
  return (
    <nav className="flex justify-between items-center px-8 h-[70px]">
      <div className="flex items-center">
        <img src={logo} alt="Logo" width="186" height="42" />
        <div className="flex ml-10 space-x-8">
          <p>Program</p>
          <p>Mentor</p>
          <p>Pricing</p>
          <p>Business</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 px-[36px] py-[10px] rounded-[47px] transition-colors duration-300">
          <p className="text-white">Sign In</p>
        </button>
        <button className="bg-blue-700 hover:bg-blue-800 px-[36px] py-[10px] rounded-[47px] transition-colors duration-300">
          <p className="text-white">Sign Up</p>
        </button>
      </div>
    </nav>
  );
};

export default NavbarLanding;