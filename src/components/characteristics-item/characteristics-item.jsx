import React from 'react';
import PropTypes from 'prop-types';

const CharacteristicsItem = ({
  type,
  value
}) => {
  return (
    <li className="char__item">
      <span className="char__type">{type}</span>
      <span className="char__value">{value}</span>
    </li>
  );
};

CharacteristicsItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default CharacteristicsItem;
