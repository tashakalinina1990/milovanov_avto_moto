import React from 'react';
import PropTypes from 'prop-types';

const AdvantagesItem = ({
  type,
  value
}) => {
  return (
    <li className={`advantages__item advantages__item--${type}`}>
      <span className="advantages__value">
        {value}
      </span>
    </li>
  );
};

AdvantagesItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default AdvantagesItem;
