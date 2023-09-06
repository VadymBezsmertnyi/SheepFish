import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductsType} from './productsReducer.types';
import {productsSchema} from './productsReducer.schemas';

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (newProductData: {
    title: string;
    price: string;
    description: string;
  }) => {
    const {title, price, description} = newProductData;
    const newProduct = {
      title,
      price: Number(price),
      description: description,
      image: '',
      category: 'shirts',
    };
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Помилка при створенні продукту');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Помилка запиту до сервера');
      }
      const data = await response.json();
      const verifyData = productsSchema.safeParse(data);
      if (verifyData.success) {
        return data;
      }
      return [];
    } catch (error) {
      throw error;
    }
  },
);

export type StateProductsReducer = {
  products: ProductsType | null;
};

export const lessonReducer = createSlice({
  name: 'productsReducer',
  initialState: {
    products: null,
  } as StateProductsReducer,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.products = [];
      console.error('Помилка отримання даних:', action.error.message);
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products = state.products
        ? [...state.products, action.payload]
        : [action.payload];
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.products = [];
      console.error('Помилка отримання даних:', action.error.message);
    });
  },
});

export const {} = lessonReducer.actions;

export default lessonReducer.reducer;
