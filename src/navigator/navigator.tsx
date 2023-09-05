import React from 'react';
import { View } from 'react-native';
import {
  DefaultTheme,
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { TabBarLabelProps } from './navigator.types';

import { ChatScreen } from '../screens/ChatScreen/Chat.screen';
import { ClubScreen } from '../screens/ClubScreen/Club.screen';
import { SettingsScreen } from '../screens/SettingsScreen/Settings.screen';
import { LessonsStack } from './stacks/LessonsStack';
import IconClub from '../icons/IconClub';

import { LESSONS_PATHS } from './navigator.conts';

import colors from '../styles/colors';
import { styles } from './navigator.style';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  const themeCustom = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  const tabBarLabel = ({ focused }: TabBarLabelProps) =>
    focused ? <View style={styles.tabBarLabel} /> : <View />;

  return (
    <NavigationContainer theme={themeCustom}>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.white,
          },
          headerStyle: {
            backgroundColor: 'transparent',
            shadowColor: 'transparent',
          },
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: 'transparent',
          },
        }}
      >
        <Tab.Screen
          name='chat'
          component={ChatScreen}
          options={{
            headerTitle: 'Чат',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name='chatbubble-ellipses'
                size={24}
                color={focused ? colors.white : colors.iconTabBar}
              />
            ),
            tabBarLabel,
          }}
        />
        <Tab.Screen
          name='club'
          component={ClubScreen}
          options={{
            headerTitle: 'Клуб/Додаток',
            tabBarIcon: ({ focused }) => (
              <IconClub
                width={24}
                height={24}
                fill={focused ? colors.white : colors.iconTabBar}
              />
            ),
            tabBarLabel,
          }}
        />
        <Tab.Screen
          name='lessons'
          component={LessonsStack}
          options={({ route }) => ({
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (
                routeName === LESSONS_PATHS.exercises ||
                routeName === LESSONS_PATHS.lesson
              ) {
                return { display: 'none' };
              }
              return {
                borderTopWidth: 0,
                backgroundColor: 'transparent',
              };
            })(route),
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name='document-text'
                size={24}
                color={focused ? colors.white : colors.iconTabBar}
              />
            ),
            tabBarLabel,
          })}
        />
        <Tab.Screen
          name='settings'
          component={SettingsScreen}
          options={{
            headerTitle: 'Настройки',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name='settings'
                size={24}
                color={focused ? colors.white : colors.iconTabBar}
              />
            ),
            tabBarLabel,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
