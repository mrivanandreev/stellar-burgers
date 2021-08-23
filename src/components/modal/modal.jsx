import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('modal-root');

export const Modal = (props) => {
  const { onClose, children } = props;

  // закрытие модалки по нажатию на Esc
  useEffect(() => {
    const handleEscPress = (ev) => {
      if (ev.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscPress);

    return () => document.removeEventListener('keydown', handleEscPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modal = (
    <ModalOverlay onClick={onClose}>
      <section className={styles.window} onClick={(ev) => ev.stopPropagation()}>
        <button
          className={`mt-15 mr-10 ${styles.closeButton}`}
          onClick={onClose}
        >
          <CloseIcon type="primary" />
        </button>
        {children}
      </section>
    </ModalOverlay>
  );

  return ReactDOM.createPortal(modal, modalRoot);
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Modal.displayName = 'Modal';
