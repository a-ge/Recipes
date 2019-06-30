import ingredients from '../apis/ingredients';

export const fetchIngredients = () => async dispatch => {
    const response = await ingredients.get('apis/ingredients');

    dispatch({
      type: "FETCH_INGREDIENTS",
      payload: response.data
    })
};

export const addItem = (id, name) => {
  return {
      type: "ADD_ITEM",
      id,
      name
  }
};

export const removeItem = (id, name) => {
  return {
      type: "REMOVE_ITEM",
      id,
      name
  }
};
