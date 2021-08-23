import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

export const ModalOverlay = ({ onClick, children }) => (
  <div className={styles.backdrop} onClick={onClick}>
    {children}
  </div>
);

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element,
};

ModalOverlay.displayName = 'ModalOverlay';
