import React from 'react';
import dragIngredientStyle from './drag-consructor-ingredient.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export const DragConstructorIngredient = (props) => {
  return (
    <div className={`${dragIngredientStyle.wrapper} mr-2`}>
      <div className={`${dragIngredientStyle.icon} mr-2`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image}
      />
    </div>
  );
};

DragConstructorIngredient.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
}