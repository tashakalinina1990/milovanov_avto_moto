import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../rating/rating';

const MS_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MS_IN_MIN = MS_IN_SEC * SEC_IN_MIN;
const MIN_IN_HOUR = 60;
const MS_IN_HOUR = MS_IN_MIN * MIN_IN_HOUR;
const HOURS_IN_DAY = 24;
const MS_IN_DAY = MS_IN_HOUR * HOURS_IN_DAY;

const getDeclension = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

const getPostedText = (date) => {
  const diff = Date.parse(new Date()) - Date.parse(date);

  const results = {
    days: Math.round(diff / MS_IN_DAY),
    hours: Math.round(diff / MS_IN_HOUR),
    mins: Math.round(diff / MS_IN_MIN),
    secs: Math.round(diff / MS_IN_SEC)
  };

  if (results.days) {
    return `${results.days} ${getDeclension(results.days, [`день`, `дня`, `дней`])} назад`;
  }

  if (results.hours) {
    return `${results.hours} ${getDeclension(results.hours, [`час`, `часа`, `часов`])} назад`;
  }

  if (results.mins) {
    return `${results.mins} ${getDeclension(results.mins, [`минуту`, `минуты`, `минут`])} назад`;
  }

  return `${results.secs} ${getDeclension(results.secs, [`секунду`, `секунды`, `секунд`])} назад`;
};

const ReviewsItem = ({
  author,
  advantages,
  disadvantages,
  comment,
  rating,
  posted
}) => {
  return (
    <li className="reviews__item reviews__item--main">
      <h4 className="reviews__author">
        {author}
      </h4>
      <ul className="reviews__list reviews__list--options">
        <li className="reviews__item reviews__item--advantages">
          <h5 className="reviews__subtitle">
            Достоинства
          </h5>
          <p className="reviews__value">
            {advantages}
          </p>
        </li>
        <li className="reviews__item reviews__item--disadvantages">
          <h5 className="reviews__subtitle">
            Недостатки
          </h5>
          <p className="reviews__value">
            {disadvantages}
          </p>
        </li>
        <li className="reviews__item">
          <h5 className="reviews__subtitle">
            Комментарий
          </h5>
          <p className="reviews__value">
            {comment}
          </p>
        </li>
      </ul>
      <Rating additionalClass="reviews__rating" value={rating} />
      <div className="reviews__footer">
        <span className="reviews__posted">{getPostedText(posted)}</span>
        <a href="" className="reviews__reply-link">Ответить</a>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  advantages: PropTypes.string.isRequired,
  disadvantages: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  posted: PropTypes.string.isRequired
};

export default React.memo(ReviewsItem);
