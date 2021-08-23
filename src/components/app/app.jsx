import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './app.module.css';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { InfoBlock } from '../info-block/info-block';
import { getIngredients } from '../../services/actions/ingredients';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((store) => store.ingredients);

  // загрузка данных при монтировании
  useEffect(() => {
    dispatch(getIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={`app-container ${styles.main}`}>
        {isLoading && <InfoBlock type="loading" />}
        {isError && <InfoBlock type="error" />}
        {(!isLoading && !isError) && (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        )}
      </main>
    </div>
  );
};

App.displayName = 'App';
