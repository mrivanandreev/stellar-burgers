import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ingredientsReducer } from './reducers/ingredients-reducer';
import { constructorReducer } from './reducers/constructor-reducer';
import { detailsModalReducer } from './reducers/details-modal-reducer';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  detailsModal: detailsModalReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
