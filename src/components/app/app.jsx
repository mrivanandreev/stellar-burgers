import React from 'react';
import appStyles from './app.module.css';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';

export const App = () => {
  return (
    <>
      <AppHeader />
      <main className={`app-container ${appStyles.main}`}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </>
  )
};
