import React from 'react';
import PropTypes from 'prop-types';

import Advantages from '../advantages/advantages';

const OfferInfo = ({
  title,
  configuration,
  price
}) => {
  return (
    <section className={`offer-info`}>
      <h2 className="offer-info__title">{title}</h2>
      <Advantages additionalClass="offer-info__configuration" items={configuration} />
      <div className="offer-info__price-container">
        <span className="offer-info__price">
          {Number.parseInt(price.new, 10).toLocaleString(`ru-RU`)} ₽
        </span>
        {
          price.old ?
            <span className="offer-info__price offer-info__price--old">
              {Number.parseInt(price.old, 10).toLocaleString(`ru-RU`)}
              <span> ₽</span>
            </span>
            : ``
        }
      </div>
      <div className="offer-info__links-container">
        <a href="" className="link">оставить заявку</a>
        <a href="" className="link link--secondary">в кредит от {Number.parseInt(price.credit, 10).toLocaleString(`ru-RU`)} ₽</a>
      </div>
    </section>
  );
};

OfferInfo.propTypes = {
  title: PropTypes.string.isRequired,
  configuration: PropTypes.array.isRequired,
  price: PropTypes.shape({
    old: PropTypes.number,
    new: PropTypes.number.isRequired,
    credit: PropTypes.number.isRequired
  })
};

export default OfferInfo;
