import ingredients from '../apis/ingredients';

export const fetchIngredients = () => async dispatch => {
    const response = await ingredients.get('apis/ingredients');

    dispatch({ type: "FETCH_INGREDIENTS", payload: response.data })
};
