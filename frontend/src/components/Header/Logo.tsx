import type React from "react";
import LogoImg from "/img/logo.png";

const Logo: React.FC = () => {
  return (
    <div className="header__center">
      <img src={LogoImg} alt="Logo" className="" />
    </div>
  );
};

export default Logo;
