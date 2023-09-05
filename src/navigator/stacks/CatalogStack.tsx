import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CatalogScreen} from '../../screens/CatalogScreen/Catalog.screen';

import {PRODUCTS_PATHS} from '../navigator.conts';

import {styles} from './CatalogStack.styles';

const Stack = createNativeStackNavigator();

export const LessonsStack = () => {
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
        initialParams={{
          indexLesson: 0,
        }}
        options={{
          headerTitle: 'Список товарів',
        }}
      />
      <Stack.Screen
        name={PRODUCTS_PATHS.product}
        children={() => <></>}
        initialParams={{
          indexLesson: 0,
        }}
        options={{
          headerTitle: 'Кросівки 1',
        }}
      />
      <Stack.Screen
        name={PRODUCTS_PATHS.add}
        children={() => <></>}
        options={({route}) => ({
          headerTitle: `Урок ${
            (route.params as {indexExercise: number}).indexExercise + 1
          }`,
        })}
      />
    </Stack.Navigator>
  );
};
