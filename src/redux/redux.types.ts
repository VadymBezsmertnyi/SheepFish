import {StateProductsReducer} from './productsReducer';
import {store} from './reducers';

export type StoreType = {
  lessonReducer: StateProductsReducer;
};
export type AppDispatch = typeof store.dispatch;
