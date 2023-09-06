import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootTabParamList} from '../../navigator/navigator.types';

import {styles} from './FavoriteScreen.styles';

interface FavoriteScreenProps
  extends NativeStackScreenProps<RootTabParamList, 'favorite'> {}

export const FavoriteScreen: FunctionComponent<FavoriteScreenProps> = ({
  route,
}) => {
  const title = `Сторінка ${route.name} на стадії розробки`;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
