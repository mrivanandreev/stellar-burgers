import React from 'react';
import cardStyles from './ingredient-card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export const IngredientCard = (props) => {
  return (
    <div className={cardStyles.card}>
      <img src={props.image} alt={props.name} className='ml-4 mr-4' />
      <div className={`${cardStyles.price} mt-1 mb-1`}>
        <span className='text text_type_digits-default'>{props.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={cardStyles.name}>
        <span className='text text_type_main-default'>{props.name}</span>
      </div>
      <Counter count={1} size="default" />
    </div>
  );
};

IngredientCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};
