import React, {FunctionComponent, useEffect} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {RootStackCatalogParamList} from '../../navigator/navigator.types';

import {AppDispatch} from '../../redux/redux.types';
import {createProduct, fetchProducts} from '../../redux/productsReducer';

import {Input} from './components/Input/Input';
import {AreaInput} from './components/AreaInput/AreaInput';

import {PRODUCTS_PATHS} from '../../navigator/navigator.conts';

import {styles} from './AddScreen.styles';
import {Formik} from 'formik';

interface CatalogScreenProps
  extends NativeStackScreenProps<RootStackCatalogParamList, 'add'> {}

export const AddScreen: FunctionComponent<CatalogScreenProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onAdd = (values: {
    title: string;
    price: string;
    description: string;
  }) => {
    const {title, price, description} = values;
    if (title.length && price.length && description.length) {
      dispatch(createProduct({title, price, description}));
      navigation.navigate(PRODUCTS_PATHS.main);
    }
  };

  return (
    <ScrollView>
      <Formik
        initialValues={{title: '', price: '', description: ''}}
        onSubmit={onAdd}>
        {({handleChange, _handleBlur, handleSubmit, values}) => (
          <View style={styles.container}>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>
                Щоб додати товар, заповніть форму
              </Text>
            </View>
            <View>
              <Input
                label={'Назва товару'}
                placeholder={'Введіть назву товару'}
                valueState={values.title}
                onChange={handleChange('title')}
              />
              <Input
                type="numeric"
                label={'Ціна товару'}
                placeholder={'Введіть ціну товару'}
                valueState={values.price}
                onChange={handleChange('price')}
              />
              <AreaInput
                label={'Ціна товару'}
                placeholder={'Введіть опис товару'}
                valueState={values.description}
                onChange={handleChange('description')}
              />
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}>
                <Text style={styles.buttonTitle}>Додати товар</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
