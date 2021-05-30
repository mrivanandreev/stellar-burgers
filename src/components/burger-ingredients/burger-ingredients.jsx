import React, { useState } from 'react';
import ingredientsStyles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientTypeList } from '../ingredient-type-list/ingredient-type-list';
import { data } from '../../utils/data';

export const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState('one');

  const buns = [];
  const mains = [];
  const sauces = [];

  data.forEach((ingredient) => {
    switch (ingredient.type) {
      case 'bun': 
        buns.push(ingredient);
        break;
      case 'main':
        mains.push(ingredient);
        break;
      case 'sauce':
        sauces.push(ingredient);
        break;
      default:
        return;
    }
  });

  return (
    <section className='ml-5 mr-5'>
      <h2 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h2>
      <div className={`${ingredientsStyles.tabs} mt-5 mb-10`}>
        <Tab value='one' active={currentTab === 'one'} onClick={setCurrentTab}>
          Булки
        </Tab>
        <Tab value='two' active={currentTab === 'two'} onClick={setCurrentTab}>
          Соусы
        </Tab>
        <Tab
          value='three'
          active={currentTab === 'three'}
          onClick={setCurrentTab}
        >
          Начинки
        </Tab>
      </div>
      <div className={ingredientsStyles.ingredients}>
        <IngredientTypeList heading='Булки' list={buns} />
        <IngredientTypeList heading='Соусы' list={sauces} />
        <IngredientTypeList heading='Начинки' list={mains} />
      </div>
    </section>
  );
};
