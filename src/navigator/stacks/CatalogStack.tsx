import React from 'react';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {StoreType} from '../../redux/redux.types';
import {RootStackCatalogParamList} from '../navigator.types';

import {CatalogScreen} from '../../screens/CatalogScreen/Catalog.screen';
import {ProductScreen} from '../../screens/ProductScreen/Product.screen';
import {AddScreen} from '../../screens/AddScreen/Add.screen';

import {PRODUCTS_PATHS} from '../navigator.conts';

import IconBack from '../../icons/IconBack';

import colors from '../../styles/colors';
import {styles} from './CatalogStack.styles';

const Stack = createNativeStackNavigator<RootStackCatalogParamList>();

export const CatalogStack = () => {
  const {products} = useSelector((state: StoreType) => state.productsReducer);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const buttonBackToMain = () => (
    <TouchableOpacity
      onPress={() => navigation.navigate(PRODUCTS_PATHS.main)}
      style={{marginRight: 10}}>
      <IconBack width={24} height={24} fill={colors.black} />
    </TouchableOpacity>
  );

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
        component={ProductScreen}
        options={({route}) => {
          const headerTitle =
            products?.find(
              product => product.id === Number(route.params?.idProduct),
            )?.title || 'No title';
          return {
            headerTitle,
            headerLeft: buttonBackToMain,
          };
        }}
      />
      <Stack.Screen
        name={PRODUCTS_PATHS.add}
        component={AddScreen}
        options={{
          headerTitle: 'Додати товар',
          headerLeft: buttonBackToMain,
        }}
      />
    </Stack.Navigator>
  );
};
