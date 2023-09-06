import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackCatalogParamList} from '../../navigator/navigator.types';

import {ItemCatalog} from './components/ItemCatalog/ItemCatalog';

import {styles} from './CatalogScreen.styles';

interface CatalogScreenProps
  extends NativeStackScreenProps<RootStackCatalogParamList, 'catalog-main'> {}

export const CatalogScreen: FunctionComponent<CatalogScreenProps> = () => {
  return (
    <View style={styles.container}>
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
      <ItemCatalog />
    </View>
  );
};
