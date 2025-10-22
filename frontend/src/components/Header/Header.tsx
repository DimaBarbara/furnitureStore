import React from "react";
import WorkTime from "./WorkTime";
import Logo from "./Logo";
import PhoneNumbers from "./PhoneNumbers";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between !p-5">
      <WorkTime />
      <Logo />
      <PhoneNumbers />
    </header>
  );
};

export default Header;
