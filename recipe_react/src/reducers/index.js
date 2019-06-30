import { combineReducers } from 'redux';

import ingredientsReducer from './ingredientsReducer';
import selectionReducer from './selectionReducer';

export default combineReducers({
    ingredients: ingredientsReducer,
    selection: selectionReducer

});
