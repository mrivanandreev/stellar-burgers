import React from "react";
import PropTypes from "prop-types";
import infoBlockStyle from "./info-block.module.css";

export const InfoBlock = ({ type }) => {
  return (
    <section className={infoBlockStyle.message}>
      {type === 'loading' && (
        <p className="text text_type_main-large">Загрузка...</p>
      )}
      {type === 'error' && (
        <>
          <p className="text text_type_main-large">Ошибка</p>
          <p className="text text_type_main-medium">
            Попробуйте перезагрузить страницу
          </p>
        </>
      )}
    </section>
  );
};

InfoBlock.propTypes = {
  type: PropTypes.oneOf(['loading', 'error']).isRequired
}
