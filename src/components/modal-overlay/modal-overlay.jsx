import React from "react";
import PropTypes from "prop-types";
import modalOverlayStyle from "./modal-overlay.module.css";

export const ModalOverlay = ({ onClick }) => (
  <div className={modalOverlayStyle.backdrop} onClick={onClick} />
);

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
};
