import React, {useState} from 'react';
import PropTypes from 'prop-types';

import GalleryPreview from '../gallery-preview/gallery-preview';

const Gallery = ({
  additionalClass = ``,
  photos
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bigPicture = photos[currentSlide];

  return (
    <section className={`gallery ${additionalClass}`}>
      <div className="gallery__img-container">
        <img
          className="gallery__big-img"
          src={bigPicture.big}
          alt={bigPicture.alt}
          width="600"
          height="375"
        />
      </div>
      <div className="gallery__control-container">
        <button
          className="gallery__button gallery__button--prev"
          onClick={() => {
            setCurrentSlide((prev) => prev - 1);
          }}
          disabled={currentSlide === 0}
        >
          Просмотреть следующий слайд
        </button>
        <ul className="gallery__previews-list">
          {
            photos.map((el, index) => <GalleryPreview key={`gallery-photo-${index}`} {...el} />)
          }
        </ul>
        <button
          className="gallery__button gallery__button--next"
          onClick={() => {
            setCurrentSlide((prev) => prev + 1);
          }}
          disabled={currentSlide === photos.length - 1}
        >
          Просмотреть предыдущий слайд
        </button>
      </div>
    </section>
  );
};

Gallery.propTypes = {
  additionalClass: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.shape({
    big: PropTypes.string.isRequired,
    small: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })).isRequired
};

export default Gallery;
