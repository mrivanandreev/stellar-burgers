import { useState } from 'react';
import { useSelector } from 'react-redux';
import ingredientsStyles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientTypeList } from '../ingredient-type-list/ingredient-type-list';
import { IngredientDetails } from '../ingredient-details/ingredient-details';

export const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState('one');

  const { buns, mains, sauces } = useSelector((store) => {
    const getIngredientsOfSameType = (type) =>
      store.ingredients.data.filter((ingredient) => ingredient.type === type);

    const buns = getIngredientsOfSameType('bun');
    const mains = getIngredientsOfSameType('main');
    const sauces = getIngredientsOfSameType('sauce');

    return { buns, mains, sauces };
  });

  return (
    <>
      <section className="ml-5 mr-5">
        <h2 className="text text_type_main-large mt-10 mb-5">
          Соберите бургер
        </h2>
        <div className={`${ingredientsStyles.tabs} mt-5 mb-10`}>
          <Tab
            value="one"
            active={currentTab === 'one'}
            onClick={setCurrentTab}
          >
            Булки
          </Tab>
          <Tab
            value="two"
            active={currentTab === 'two'}
            onClick={setCurrentTab}
          >
            Соусы
          </Tab>
          <Tab
            value="three"
            active={currentTab === 'three'}
            onClick={setCurrentTab}
          >
            Начинки
          </Tab>
        </div>
        <div className={ingredientsStyles.ingredients}>
          <IngredientTypeList heading="Булки" list={buns} />
          <IngredientTypeList heading="Соусы" list={sauces} />
          <IngredientTypeList heading="Начинки" list={mains} />
        </div>
      </section>
      <IngredientDetails />
    </>
  );
};

BurgerIngredients.displayName = 'BurgerIngredients';
