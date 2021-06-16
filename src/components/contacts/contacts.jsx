import React from 'react';
import GoogleMap from '../map/map';

const Contacts = () => {
  return (
    <div className="contacts">
      <ul className="contacts__list">
        <li className="contacts__item">
          <h5 className="contacts__title">Адрес</h5>
          <address className="contacts__value">
            Санкт-Петербург,
            набережная&nbsp;реки&nbsp;Карповки,&nbsp;дом&nbsp;5
          </address>
        </li>
        <li className="contacts__item">
          <h5 className="contacts__title">Режим работы</h5>
          <p className="contacts__value">
            Ежедневно, с 10:00 до 21:00
          </p>
        </li>
        <li className="contacts__item">
          <h5 className="contacts__title">Телефон</h5>
          <a href="tel:88003335599" className="contacts__value">
            8 (800) 333-55-99
          </a>
        </li>
        <li className="contacts__item">
          <h5 className="contacts__title">E-mail</h5>
          <a href="mailto:info@avto-moto.ru" className="contacts__value">
            info@avto-moto.ru
          </a>
        </li>
      </ul>
      <GoogleMap additionalClass="contacts__map" />
    </div>
  );
};

export default Contacts;
