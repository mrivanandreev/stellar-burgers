import React from "react";
import PropTypes from "prop-types";
import ingredientDetailsStyles from "./ingredient-details.module.css";
import { Modal } from "../modal/modal";

export const IngredientDetails = (props) => {
  const {
    name,
    infoProps: { image_large, calories, proteins, fat, carbohydrates },
    ...modalProps
  } = props;

  return (
    <Modal {...modalProps}>
      <div
        className={`${ingredientDetailsStyles.wrapper} pt-10 pr-10 pb-15 pl-10`}
      >
        <h1
          className={`${ingredientDetailsStyles.heading} text text_type_main-large`}
        >
          Детали ингредиента
        </h1>
        <img src={image_large} alt={name} className="mb-4" />
        <p className="text text_type_main-medium mb-8">{name}</p>
        <div className={`${ingredientDetailsStyles.supplementFactsBlock} text_color_inactive`}>
          <div className={ingredientDetailsStyles.supplementFact}>
            <p className='text text_type_main-default'>Калории,&nbsp;ккал</p>
            <p className='text text_type_digits-default'>{calories}</p>
          </div>
          <div className={ingredientDetailsStyles.supplementFact}>
            <p className='text text_type_main-default'>Белки,&nbsp;г</p>
            <p className='text text_type_digits-default'>{proteins}</p>
          </div>
          <div className={ingredientDetailsStyles.supplementFact}>
            <p className='text text_type_main-default'>Жиры,&nbsp;г</p>
            <p className='text text_type_digits-default'>{fat}</p>
          </div>
          <div className={ingredientDetailsStyles.supplementFact}>
            <p className='text text_type_main-default'>Углеводы,&nbsp;г</p>
            <p className='text text_type_digits-default'>{carbohydrates}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

IngredientDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image_large: PropTypes.string,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
};
