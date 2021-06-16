import React from 'react';
import PropTypes from 'prop-types';

import CharacteristicsItem from '../characteristics-item/characteristics-item';

const Characteristics = ({
  items
}) => {
  return (
    <ul className="char__list">
      {
        items.map((el, index) => <CharacteristicsItem key={`char-item-${index}`} {...el} />)
      }
    </ul>
  );
};

Characteristics.propTypes = {
  items: PropTypes.array.isRequired
};

export default Characteristics;
