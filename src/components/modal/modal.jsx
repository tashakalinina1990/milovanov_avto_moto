import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({
  children,
  onCancel,
  isOpen
}) => {
  const onModalCancel = () => {
    onCancel();
  };

  const onEscKeydown = React.useCallback((evt) => {
    if (evt.key === `Escape`) {
      onModalCancel();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener(`keydown`, onEscKeydown);
    }

    return () => {
      document.removeEventListener(`keydown`, onEscKeydown);
    };
  }, [isOpen]);

  return isOpen && ReactDOM.createPortal(
      <section className="modal">
        <div
          className="modal__overlay"
          onClick={onModalCancel}
        >
          <div
            className="modal__content-container"
            onClick={(evt) => {
              evt.stopPropagation();
            }}
          >
            <button
              className="modal__close-button"
              onClick={onModalCancel}
              type="button"
            >
              Закрыть модальное окно
            </button>
            {children}
          </div>
        </div>
      </section>,
      document.body
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onCancel: PropTypes.func.isRequired
};

export default Modal;
