import React, {FunctionComponent, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackCatalogParamList} from '../../navigator/navigator.types';
import {AppDispatch} from '../../redux/redux.types';

import {fetchProducts} from '../../redux/productsReducer';

import {ItemCatalog} from './components/ItemCatalog/ItemCatalog';

import {styles} from './CatalogScreen.styles';

interface CatalogScreenProps
  extends NativeStackScreenProps<RootStackCatalogParamList, 'catalog-main'> {}

export const CatalogScreen: FunctionComponent<CatalogScreenProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ScrollView>
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
    </ScrollView>
  );
};
