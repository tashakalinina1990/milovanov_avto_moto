import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Tabs = ({
  additionalClass = ``,
  titles,
  children
}) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <section className={`tabs ${additionalClass}`}>
      <ul className="tabs__list">
        {
          titles.map((el, index) => (
            <li key={`tabs-title-${index}`} className="tabs__item">
              <button
                className={`tabs__button ${index === currentTab ? `tabs__button--active` : ``}`}
                type="button"
                onClick={() => {
                  setCurrentTab(() => index);
                }}
                disabled={index === currentTab}
              >
                {el}
              </button>
            </li>
          ))
        }
      </ul>
      {
        children[currentTab]
      }
    </section>
  );
};

Tabs.propTypes = {
  additionalClass: PropTypes.string,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Tabs;
