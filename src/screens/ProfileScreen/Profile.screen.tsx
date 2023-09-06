import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootTabParamList} from '../../navigator/navigator.types';

import {styles} from './ProfileScreen.styles';

interface ProfileScreenProps
  extends NativeStackScreenProps<RootTabParamList, 'profile'> {}

export const ProfileScreen: FunctionComponent<ProfileScreenProps> = ({
  route,
}) => {
  const title = `Сторінка ${route.name} на стадії розробки`;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
