import { useState, useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientTypeList } from '../ingredient-type-list/ingredient-type-list';
import { IngredientDetails } from '../ingredient-details/ingredient-details';

export const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState('buns');

  const { data } = useSelector((store) => store.ingredients);

  // разбиваю данные на три массива по типу
  const { buns, mains, sauces } = useMemo(() => {
    const getIngredientsOfSameType = (type) =>
      data.filter((ingredient) => ingredient.type === type);

    return {
      buns: getIngredientsOfSameType('bun'),
      mains: getIngredientsOfSameType('main'),
      sauces: getIngredientsOfSameType('sauce'),
    };
  }, [data]);

  const ingredientsRef = useRef(null);
  const bunTabClickRef = useRef(null);
  const sauceTabClickRef = useRef(null);
  const mainTabClickRef = useRef(null);
  const [bunRef, bunsInView] = useInView({ threshold: 0.1 });
  const [sauceRef, saucesInView] = useInView({ threshold: 0.1 });
  const [mainRef, mainsInView] = useInView({ threshold: 0.1 });

  const handleIngredientScroll = () => {
    switch (true) {
      case bunsInView:
        setCurrentTab('buns');
        break;
      case saucesInView:
        setCurrentTab('sauces');
        break;
      case mainsInView:
        setCurrentTab('mains');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleIngredientScroll();
  }, [bunsInView, saucesInView, mainsInView]);

  const handleTabClick = (type, ref) => {
    setCurrentTab(type);
    ref.current &&
      ref.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
  };

  return (
    <>
      <section className={`${styles.wrapper} ml-5 mr-5 mb-10`}>
        <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
        <div className={`${styles.tabs} mt-5 mb-10`}>
          <Tab
            value="buns"
            active={currentTab === 'buns'}
            onClick={() => handleTabClick('buns', bunTabClickRef)}
          >
            Булки
          </Tab>
          <Tab
            value="sauces"
            active={currentTab === 'sauces'}
            onClick={() => handleTabClick('sauces', sauceTabClickRef)}
          >
            Соусы
          </Tab>
          <Tab
            value="mains"
            active={currentTab === 'mains'}
            onClick={() => handleTabClick('mains', mainTabClickRef)}
          >
            Начинки
          </Tab>
        </div>
        <div className={styles.ingredients} ref={ingredientsRef}>
          <div ref={bunRef}>
            <div ref={bunTabClickRef}>
              <IngredientTypeList heading="Булки" list={buns} />
            </div>
          </div>
          <div ref={sauceRef}>
            <div ref={sauceTabClickRef}>
              <IngredientTypeList heading="Соусы" list={sauces} />
            </div>
          </div>
          <div ref={mainRef}>
            <div ref={mainTabClickRef}>
              <IngredientTypeList heading="Начинки" list={mains} />
            </div>
          </div>
        </div>
      </section>
      <IngredientDetails />
    </>
  );
};

BurgerIngredients.displayName = 'BurgerIngredients';

// закончил на том, что установил react-intersection-observer
