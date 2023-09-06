import {z} from 'zod';
import {productSchema, productsSchema} from './productsReducer.schemas';

export type ProductType = z.infer<typeof productSchema>;

export type ProductsType = z.infer<typeof productsSchema>;
