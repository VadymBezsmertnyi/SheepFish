import React, {FunctionComponent, useMemo} from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {RootStackCatalogParamList} from '../../navigator/navigator.types';
import {StoreType} from '../../redux/redux.types';

import {styles} from './ProductScreen.styles';
import {PRODUCTS_PATHS} from '../../navigator/navigator.conts';
import colors from '../../styles/colors';

interface CatalogScreenProps
  extends NativeStackScreenProps<RootStackCatalogParamList, 'product'> {}

export const ProductScreen: FunctionComponent<CatalogScreenProps> = ({
  route,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {products} = useSelector((state: StoreType) => state.productsReducer);
  const product = useMemo(
    () =>
      products !== null && route.params?.idProduct
        ? products.find(
            productData => productData.id === Number(route.params?.idProduct),
          )
        : null,
    [products, route.params?.idProduct],
  );

  if ((product === null || product === undefined) && route.params?.idProduct) {
    navigation.navigate(PRODUCTS_PATHS.main);
  }

  if (product === null || product === undefined) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode={'contain'}
            style={styles.image}
            src={product.image}
            source={{}}
          />
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} $</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
