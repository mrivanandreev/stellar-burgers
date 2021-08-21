import { GET_INGREDIENTS_URL } from '../../utils/constants';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAIL = 'GET_INGREDIENTS_FAIL';

export const getIngredients = () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_REQUEST });
  fetch(GET_INGREDIENTS_URL)
    .then((res) => res.json())
    .then((json) =>
      dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: json.data }),
    )
    .catch(() => dispatch({ type: GET_INGREDIENTS_FAIL }));
};
