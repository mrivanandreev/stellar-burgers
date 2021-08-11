import { useEffect } from "react";
import appStyles from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { InfoBlock } from "../info-block/info-block";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../store/actions/getIngredients";

export const App = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.ingredients);

  const shouldRenderMainContent =
    !ingredients.isLoading &&
    !ingredients.isError &&
    ingredients.data.length > 0;

  useEffect(() => {
    dispatch(getIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppHeader />
      <main className={`app-container ${appStyles.main}`}>
        {ingredients.isLoading && <InfoBlock type="loading" />}
        {ingredients.isError && <InfoBlock type="error" />}
        {shouldRenderMainContent && (
          <>
            <BurgerIngredients ingredients={ingredients.data} />
            <BurgerConstructor ingredients={ingredients.data} />
          </>
        )}
      </main>
    </>
  );
};
