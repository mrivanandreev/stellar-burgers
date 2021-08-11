import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAIL,
} from '../actions/get-ingredients';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case GET_INGREDIENTS:
      return { ...state, isLoading: true };
    case GET_INGREDIENTS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload }
    case GET_INGREDIENTS_FAIL:
      return { ...state, isLoading: false, isError: true }
  }
}
