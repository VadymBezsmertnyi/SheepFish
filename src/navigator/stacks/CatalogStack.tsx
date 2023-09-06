import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackCatalogParamList} from '../navigator.types';

import {CatalogScreen} from '../../screens/CatalogScreen/Catalog.screen';

import {PRODUCTS_PATHS} from '../navigator.conts';

import {styles} from './CatalogStack.styles';

const Stack = createNativeStackNavigator<RootStackCatalogParamList>();

export const CatalogStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerShadowVisible: false,
        contentStyle: {
          paddingHorizontal: 21,
        },
      }}>
      <Stack.Screen
        name={PRODUCTS_PATHS.main}
        component={CatalogScreen}
        options={{
          headerTitle: 'Список товарів',
        }}
      />
      <Stack.Screen
        name={PRODUCTS_PATHS.product}
        children={() => <></>}
        options={{
          headerTitle: 'Кросівки 1',
        }}
      />
      <Stack.Screen name={PRODUCTS_PATHS.add} children={() => <></>} />
    </Stack.Navigator>
  );
};
