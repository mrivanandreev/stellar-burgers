import React, { useState } from "react";
import PropTypes from "prop-types";
import ingredientsStyles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientTypeList } from "../ingredient-type-list/ingredient-type-list";

export const BurgerIngredients = ({ ingredients }) => {
  const [currentTab, setCurrentTab] = useState("one");

  const getIngredientsOfSameType = (type) =>
    ingredients.filter((ingredient) => ingredient.type === type);

  const buns = getIngredientsOfSameType("bun");
  const mains = getIngredientsOfSameType("main");
  const sauces = getIngredientsOfSameType("sauce");

  return (
    <section className="ml-5 mr-5">
      <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <div className={`${ingredientsStyles.tabs} mt-5 mb-10`}>
        <Tab value="one" active={currentTab === "one"} onClick={setCurrentTab}>
          Булки
        </Tab>
        <Tab value="two" active={currentTab === "two"} onClick={setCurrentTab}>
          Соусы
        </Tab>
        <Tab
          value="three"
          active={currentTab === "three"}
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
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates: PropTypes.number,
      fat: PropTypes.number,
      image: PropTypes.string,
      image_large: PropTypes.string,
      image_mobile: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      proteins: PropTypes.number,
      type: PropTypes.string,
      __v: PropTypes.number,
      _id: PropTypes.string,
    })
  ).isRequired,
};
