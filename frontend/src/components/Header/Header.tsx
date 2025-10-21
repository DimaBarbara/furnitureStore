import React from 'react';
import Logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div>Пн-Пт з 10:00 до 20:00</div>
        <div>Сб-Вс з 10:00 до 19:00</div>
        <div>
          Наші салони</div>
      </div>

      <div className="header__center">
        <img src={Logo} alt="Logo" className="header__logo" />
      </div>

      <div className="header__right">
        <div>Відділ продажів: 8 (495) 664-54-57 / 8 (929) 928-86-35</div>
        <div>Дзвінки по Україні: 8-800-000-00-00 (Безкоштовно)</div>
      </div>
    </header>
  );
};

export default Header;
