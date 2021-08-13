import PropTypes from 'prop-types';
import modalOverlayStyle from './modal-overlay.module.css';

export const ModalOverlay = ({ onClick, children }) => (
  <div className={modalOverlayStyle.backdrop} onClick={onClick}>
    {children}
  </div>
);

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element,
};
