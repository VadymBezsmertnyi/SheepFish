import React, {FunctionComponent, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackCatalogParamList} from '../../navigator/navigator.types';
import {AppDispatch, StoreType} from '../../redux/redux.types';

import {fetchProducts} from '../../redux/productsReducer';

import {ItemCatalog} from './components/ItemCatalog/ItemCatalog';

import {styles} from './CatalogScreen.styles';

interface CatalogScreenProps
  extends NativeStackScreenProps<RootStackCatalogParamList, 'catalog-main'> {}

export const CatalogScreen: FunctionComponent<CatalogScreenProps> = () => {
  const {products} = useSelector((state: StoreType) => state.productsReducer);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (products === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map(product => {
          return (
            <ItemCatalog key={`product-${product.id}`} product={product} />
          );
        })}
      </View>
    </ScrollView>
  );
};
