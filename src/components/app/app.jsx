import React, { useState, useEffect } from "react";
import appStyles from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { InfoBlock } from "../info-block/info-block";
import { INGREDIENTS_URL } from "../../utils/constants";

export const App = () => {
  const [ingredientsData, setIngredientsData] = useState({
    ingredients: [],
    isLoading: false,
    isError: false,
  });

  const shouldRenderMainContent =
    !ingredientsData.isLoading &&
    !ingredientsData.isError &&
    ingredientsData.ingredients.length > 0;

  useEffect(() => {
    const getIngredientsData = async () => {
      setIngredientsData((prevState) => ({
        ...prevState,
        isLoading: true,
      }));
      try {
        const response = await fetch(INGREDIENTS_URL);
        const data = await response.json();
        setIngredientsData((prevState) => ({
          ...prevState,
          isLoading: false,
          ingredients: data.data,
        }));
      } catch {
        setIngredientsData((prevState) => ({
          ...prevState,
          isLoading: false,
          isError: true,
        }));
      }
    };

    getIngredientsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppHeader />
      <main className={`app-container ${appStyles.main}`}>
        {ingredientsData.isLoading && <InfoBlock type="loading" />}
        {ingredientsData.isError && <InfoBlock type="error" />}
        {shouldRenderMainContent && (
          <>
            <BurgerIngredients ingredients={ingredientsData.ingredients} />
            <BurgerConstructor ingredients={ingredientsData.ingredients} />
          </>
        )}
      </main>
    </>
  );
};
