import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const STARS_COUNT = 5;

const ReviewsForm = ({
  onSubmit
}) => {
  const [name, setName] = useState(``);
  const [advantages, setAdvantages] = useState(``);
  const [disadvantages, setDisadvantages] = useState(``);
  const [comment, setComment] = useState(``);
  const [rating, setRating] = useState(null);

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    const now = new Date();
    now.setSeconds(now.getSeconds() - 1);

    const data = {
      author: name,
      advantages,
      disadvantages,
      comment,
      rating,
      posted: now.toISOString()
    };

    localStorage.setItem(`name`, name);
    localStorage.setItem(`advantages`, advantages);
    localStorage.setItem(`disadvantages`, disadvantages);
    localStorage.setItem(`comment`, comment);
    localStorage.setItem(`rating`, rating);

    onSubmit(data);
  };

  useEffect(() => {
    setName(() => localStorage.getItem(`name`) || ``);
    setAdvantages(() => localStorage.getItem(`advantages`) || ``);
    setDisadvantages(() => localStorage.getItem(`disadvantages`) || ``);
    setComment(() => localStorage.getItem(`comment`) || ``);
    setRating(() => +localStorage.getItem(`rating`) || null);
  }, []);

  return (
    <form
      action="post"
      className="reviews-form"
      onSubmit={onFormSubmit}
    >
      <h2 className="reviews-form__title">Оставить отзыв </h2>
      <label className="visually-hidden" htmlFor="reviews-form-name">
        Имя
      </label>
      <div className="reviews-form__required">
        <input
          className="reviews-form__input"
          id="reviews-form-name"
          type="text"
          placeholder="Имя"
          required
          autoFocus
          onChange={(evt) => {
            setName(evt.target.value);
          }}
          value={name}
        />
      </div>
      <label className="visually-hidden" htmlFor="reviews-form-advantages">
        Достоинства
      </label>
      <input
        className="reviews-form__input"
        id="reviews-form-advantages"
        type="text"
        placeholder="Достоинства"
        onChange={(evt) => {
          setAdvantages(evt.target.value);
        }}
        value={advantages}
      />
      <label className="visually-hidden" htmlFor="reviews-form-disadvantages">
        Недостатки
      </label>
      <input
        className="reviews-form__input"
        id="reviews-form-disadvantages"
        type="text"
        placeholder="Недостатки"
        onChange={(evt) => {
          setDisadvantages(evt.target.value);
        }}
        value={disadvantages}
      />
      <div className="reviews-form__rating-container">
        <h3 className="reviews-form__subtitle">Оцените товар:</h3>
        <div className="reviews-form__stars stars">
          {
            Array(STARS_COUNT).fill(``).map((_, index) =>
              <React.Fragment key={`rating-star-${index}`}>
                <input
                  className="stars__input visually-hidden"
                  name="rating"
                  value={STARS_COUNT - index}
                  id={`${STARS_COUNT - index}-stars`}
                  type="radio"
                  onChange={() => {
                    setRating(() => STARS_COUNT - index);
                  }}
                  checked={rating === STARS_COUNT - index}
                />
                <label htmlFor={`${STARS_COUNT - index}-stars`} className="stars__label" title="Звезда рейтинга">
                  <svg className="stars__icon" width="27" height="25">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            )
          }
        </div>
      </div>
      <label className="visually-hidden" htmlFor="reviews-form-comment">
        Комментарий
      </label>
      <div className="reviews-form__required reviews-form__required--comment">
        <textarea
          className="reviews-form__comment reviews-form__input"
          id="reviews-form-comment"
          placeholder="Комментарий"
          required
          onChange={(evt) => {
            setComment(evt.target.value);
          }}
          value={comment}
        />
      </div>
      <button
        className="reviews-form__submit link"
        type="submit"
        disabled={name.length === 0 || comment.length === 0 || rating === null}
      >
        оставить отзыв
      </button>
    </form>
  );
};

ReviewsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ReviewsForm;
