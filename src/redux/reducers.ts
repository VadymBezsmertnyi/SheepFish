import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import productsReducer from './productsReducer';

export const store = configureStore({
  reducer: combineReducers({productsReducer}),
});
