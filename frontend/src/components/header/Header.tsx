import React from "react";
import WorkTime from "../header/WorkTime";
import Logo from "../common/Logo";
import PhoneNumbers from "../header/PhoneNumbers";

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex items-center justify-between !p-5 !pb-0">
        <WorkTime />
        <Logo />
        <PhoneNumbers />
      </div>
        <div className="border border-[#e7e6e6] w-full h-0 !mb-6"></div>
    </header>
    
  );
};

export default Header;
