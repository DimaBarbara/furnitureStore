import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="!px-32 !pb-4">
      <ul className="flex justify-between">
                <li>
          <Link to="/" className="font-normal text-[16px] leading-[127%] tracking-[-0.03em] !text-black">
            Головна
          </Link>
        </li>
        <li>
          <Link to="/catalog" className="font-normal text-[16px] leading-[127%] tracking-[-0.03em] !text-black">
            Каталог
          </Link>
        </li>
        <li>
          <Link to="/about" className="font-normal text-[16px] leading-[127%] tracking-[-0.03em] !text-black">
            Про нас
          </Link>
        </li>
        <li>
          <Link to="/customer" className="font-normal text-[16px] leading-[127%] tracking-[-0.03em] !text-black">
            Покупцеві
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
