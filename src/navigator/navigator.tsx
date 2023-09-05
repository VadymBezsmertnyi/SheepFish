import React from 'react';
import {View} from 'react-native';
import {
  DefaultTheme,
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabBarLabelProps} from './navigator.types';

import {LessonsStack} from './stacks/CatalogStack';

import {PRODUCTS_PATHS} from './navigator.conts';

import {styles} from './navigator.style';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  const themeCustom = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  const tabBarLabel = ({focused}: TabBarLabelProps) =>
    focused ? <View style={styles.tabBarLabel} /> : <View />;

  return (
    <NavigationContainer theme={themeCustom}>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Tab.Screen
          name="lessons"
          component={LessonsStack}
          /* options={({route}) => ({
            tabBarStyle: (routeState => {
              const routeName = getFocusedRouteNameFromRoute(routeState) ?? '';
              if (
                routeName === PRODUCTS_PATHS.add ||
                routeName === PRODUCTS_PATHS.product
              ) {
                return {display: 'none'};
              }
              return {
                borderTopWidth: 0,
                backgroundColor: 'transparent',
              };
            })(route),
            headerShown: false,
            tabBarLabel,
          })} */
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
