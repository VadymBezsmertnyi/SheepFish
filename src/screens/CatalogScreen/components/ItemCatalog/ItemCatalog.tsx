import React, {FunctionComponent, memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {ProductType} from '../../../../redux/productsReducer.types';
import {PRODUCTS_PATHS} from '../../../../navigator/navigator.conts';

import {styles} from './ItemCatalog.styles';

type ItemCatalogProps = {
  product: ProductType;
};

export const ItemCatalog: FunctionComponent<ItemCatalogProps> = memo(
  ({product}) => {
    const navigation =
      useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const onPress = () => {
      navigation.navigate(PRODUCTS_PATHS.product, {idProduct: product.id});
    };

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
          <Image
            resizeMode={'cover'}
            style={styles.image}
            src={product.image}
            source={{}}
          />
        </View>
        <View>
          <Text numberOfLines={1} style={styles.title}>
            {product.title}
          </Text>
        </View>
        <View>
          <Text style={styles.price}>2 000 грн</Text>
        </View>
      </TouchableOpacity>
    );
  },
);
