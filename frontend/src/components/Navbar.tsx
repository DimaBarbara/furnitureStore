import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li>
          <Link to="/catalog" className="navbar__link">
            Каталог
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar__link">
            Про нас
          </Link>
        </li>
        <li>
          <Link to="/customer" className="navbar__link">
            Покупцеві
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
