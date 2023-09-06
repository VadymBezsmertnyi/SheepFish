import {LabelPosition} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {PATHS, PRODUCTS_PATHS} from './navigator.conts';

export type TabBarLabelProps = {
  focused: boolean;
  color: string;
  position: LabelPosition;
  children: string;
};

export type RootTabParamList = {
  [PATHS.catalog]: undefined;
  [PATHS.shops]: undefined;
  [PATHS.favorite]: undefined;
  [PATHS.profile]: undefined;
};

export type RootStackCatalogParamList = {
  [PRODUCTS_PATHS.main]: undefined;
  [PRODUCTS_PATHS.product]: undefined;
  [PRODUCTS_PATHS.add]: undefined;
};
