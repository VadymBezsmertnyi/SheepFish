import {createSlice} from '@reduxjs/toolkit';

export type StateProductsReducer = {
  products: Array<string> | null;
};

export const lessonReducer = createSlice({
  name: 'productsReducer',
  initialState: {
    products: null,
  } as StateProductsReducer,
  reducers: {
    getLessons: state => {
      state.products = [];
    },
    /* addTodo: (state, action) => {
      state.todos_list = [
        ...state.todos_list,
        { id: ++id, task: action.payload.task },
      ];
    },
    deleteTodo: (state, action) => {
      state.todos_list = [
        ...state.todos_list.filter((todo) => todo.id != action.payload),
      ];
    }, */
  },
});

export const {getLessons} = lessonReducer.actions;

export default lessonReducer.reducer;
