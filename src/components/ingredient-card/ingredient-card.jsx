import React, { useState } from "react";
import PropTypes from "prop-types";
import cardStyles from "./ingredient-card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientDetails } from "../ingredient-details/ingredient-details";

export const IngredientCard = (props) => {
  const { name, price, image, ...otherProps } = props;

  const [isIngredientDetailsModalOpen, setIngredientDetailsModalOpen] =
    useState(false);

  const handleOpenIngredientDetailsModal = () => {
    setIngredientDetailsModalOpen(true);
  };

  return (
    <div className={cardStyles.card} onClick={handleOpenIngredientDetailsModal}>
      <img src={image} alt={name} className="ml-4 mr-4" />
      <div className={`${cardStyles.price} mt-1 mb-1`}>
        <span className="text text_type_digits-default">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={cardStyles.name}>
        <span className="text text_type_main-default">{name}</span>
      </div>
      <Counter count={1} size="default" />
      <IngredientDetails
        isOpen={isIngredientDetailsModalOpen}
        setOpen={setIngredientDetailsModalOpen}
        name={name}
        infoProps={otherProps}
      />
    </div>
  );
};

IngredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
};
