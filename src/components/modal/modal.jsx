import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import modalStyle from "./modal.module.css";
import { ModalOverlay } from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById("modal-root");

export const Modal = (props) => {
  const { isOpen, setOpen, children } = props;

  const closeModal = (ev) => {
    ev.stopPropagation();;
    setOpen(false);
  }

  if (!isOpen) return null;

  const modal = (
    <>
      <ModalOverlay onClick={closeModal} />
      <section className={modalStyle.window}>
        <button className={`mt-15 mr-10 ${modalStyle.closeButton}`} onClick={closeModal}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </section>
    </>
  );

  return ReactDOM.createPortal(modal, modalRoot);
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.element
}
