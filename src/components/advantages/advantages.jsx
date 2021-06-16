import React from 'react';
import PropTypes from 'prop-types';

import AdvantagesItem from '../advantages-item/advantages-item';

const Advantages = ({
  additionalClass = ``,
  items
}) => {
  return (
    <ul className={`advantages__list ${additionalClass}`}>
      {
        items.map((el, index) => <AdvantagesItem key={`config-${index}`} {...el} />)
      }
    </ul>
  );
};

Advantages.propTypes = {
  additionalClass: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default Advantages;
