import React from 'react';
import {Text} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootTabParamList} from './navigator.types';

import {CatalogStack} from './stacks/CatalogStack';
import {ShopsScreen} from '../screens/ShopsScreen/Shops.screen';
import {FavoriteScreen} from '../screens/FavoriteScreen/Favorite.screen';
import {ProfileScreen} from '../screens/ProfileScreen/Profile.screen';

import {PATHS, PRODUCTS_PATHS} from './navigator.conts';

import IconCart from '../icons/IconCart';
import IconHeart from '../icons/IconHeart';
import IconProfile from '../icons/IconProfile';
import IconShop from '../icons/IconShop';

import colors from '../styles/colors';
import {styles} from './navigator.style';

const Tab = createBottomTabNavigator<RootTabParamList>();
const tabBarIcon = (focused: boolean, name: string) => {
  if (name === PATHS.shops) {
    return (
      <IconShop
        width={24}
        height={24}
        stroke={focused ? colors.white : colors.notSelectTabBar}
      />
    );
  }
  if ((name = PATHS.profile)) {
    return (
      <IconProfile
        width={24}
        height={24}
        stroke={focused ? colors.white : colors.notSelectTabBar}
      />
    );
  }
  if (name === PATHS.favorite) {
    return (
      <IconHeart
        width={24}
        height={24}
        stroke={focused ? colors.white : colors.notSelectTabBar}
      />
    );
  }

  return (
    <IconCart
      width={24}
      height={24}
      stroke={focused ? colors.white : colors.notSelectTabBar}
    />
  );
};
const tabBarLabel = (focused: boolean, title: string) => {
  const labelStyle = {
    color: focused ? colors.white : colors.notSelectTabBar,
    fontSize: 14,
  };
  return <Text style={labelStyle}>{title}</Text>;
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Tab.Screen
          name={PATHS.catalog}
          component={CatalogStack}
          options={({route}) => ({
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
                backgroundColor: colors.backgroundTabBar,
                shadowColor: 'transparent',
              };
            })(route),
            headerShown: false,
            tabBarIcon: ({focused}) => tabBarIcon(focused, route.name),
            tabBarLabel: ({focused}) => tabBarLabel(focused, 'Каталог'),
          })}
        />
        <Tab.Screen
          name={PATHS.shops}
          component={ShopsScreen}
          options={({route}) => ({
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
                backgroundColor: colors.backgroundTabBar,
                shadowColor: 'transparent',
              };
            })(route),
            headerShown: false,
            tabBarIcon: ({focused}) => tabBarIcon(focused, route.name),
            tabBarLabel: ({focused}) => tabBarLabel(focused, 'Крамниці'),
          })}
        />
        <Tab.Screen
          name={PATHS.favorite}
          component={FavoriteScreen}
          options={({route}) => ({
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
                backgroundColor: colors.backgroundTabBar,
                shadowColor: 'transparent',
              };
            })(route),
            headerShown: false,
            tabBarIcon: ({focused}) => tabBarIcon(focused, route.name),
            tabBarLabel: ({focused}) => tabBarLabel(focused, 'Улюблені'),
          })}
        />
        <Tab.Screen
          name={PATHS.profile}
          component={ProfileScreen}
          options={({route}) => ({
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
                backgroundColor: colors.backgroundTabBar,
                shadowColor: 'transparent',
              };
            })(route),
            headerShown: false,
            tabBarIcon: ({focused}) => tabBarIcon(focused, route.name),
            tabBarLabel: ({focused}) => tabBarLabel(focused, 'Профіль'),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
