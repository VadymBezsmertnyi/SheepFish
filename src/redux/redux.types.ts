import {StateProductsReducer} from './productsReducer';
import {store} from './reducers';

export type StoreType = {
  productsReducer: StateProductsReducer;
};
export type AppDispatch = typeof store.dispatch;
