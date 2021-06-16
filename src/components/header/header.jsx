import React from 'react';

import logoImg from '../../assets/img/logo.svg';

const Header = () => {
  return (
    <header className="page__header header">
      <div className="container">
        <a href="/" className="header__logo logo" >
          <img className="logo__img" src={logoImg} alt="Логотип интернет-магазина - Avto-Moto" width="134" height="55" />
        </a>
        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="" className="nav__link">
                Автомобили
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                Контакты
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                Услуги
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                Вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
