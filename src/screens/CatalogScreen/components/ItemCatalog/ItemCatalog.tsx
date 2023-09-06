import React, {FunctionComponent} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import defaultImage from '../../../../images/product.jpeg';

import {styles} from './ItemCatalog.styles';

export const ItemCatalog: FunctionComponent = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image style={styles.image} source={defaultImage} />
      </View>
      <View>
        <Text style={styles.title}>Кросівки 1</Text>
      </View>
      <View>
        <Text style={styles.price}>2 000 грн</Text>
      </View>
    </TouchableOpacity>
  );
};
