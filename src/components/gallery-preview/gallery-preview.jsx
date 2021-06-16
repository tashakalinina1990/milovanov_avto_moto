import React from 'react';
import PropTypes from 'prop-types';

const GalleryPreview = ({
  small,
  alt
}) => (
  <li className="gallery__preview">
    <img
      className="gallery__small-img"
      src={small}
      alt={`${alt}(превью)`}
      width="128"
      height="80"
    />
  </li>
);

GalleryPreview.propTypes = {
  small: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default GalleryPreview;
