import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';

import {styles} from './ItemCatalog.styles';

export const ItemCatalog: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <Text>Кросівки 1</Text>
      </View>
      <View>
        <Text>2 000 грн</Text>
      </View>
    </View>
  );
};
