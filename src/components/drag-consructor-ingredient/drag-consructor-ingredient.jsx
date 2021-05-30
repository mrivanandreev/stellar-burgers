import React from 'react';
import dragIngredientStyle from './drag-consructor-ingredient.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

export const DragConstructorIngredient = () => {
  return (
    <div className={`${dragIngredientStyle.wrapper} mr-2`}>
      <div className={`${dragIngredientStyle.icon} mr-2`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={"https://code.s3.yandex.net/react/code/salad-mobile.png"}
      />
    </div>
  );
}