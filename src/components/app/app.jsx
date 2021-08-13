import { useEffect } from 'react';
import appStyles from './app.module.css';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { InfoBlock } from '../info-block/info-block';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/get-ingredients';
import { useMemo } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((store) => store.ingredients);

  const shouldRenderMainContent = useMemo(
    () => !isLoading && !isError, [isLoading, isError],
  );

  useEffect(() => {
    dispatch(getIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppHeader />
      <main className={`app-container ${appStyles.main}`}>
        {isLoading && <InfoBlock type="loading" />}
        {isError && <InfoBlock type="error" />}
        {shouldRenderMainContent && (
          <>
            <BurgerIngredients />
            <BurgerConstructor />
          </>
        )}
      </main>
    </>
  );
};
