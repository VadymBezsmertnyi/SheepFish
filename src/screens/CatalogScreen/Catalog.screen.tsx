import React, {FunctionComponent, useEffect} from 'react';
import {View, ScrollView, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {RootStackCatalogParamList} from '../../navigator/navigator.types';
import {AppDispatch, StoreType} from '../../redux/redux.types';

import {fetchProducts, getProductsStorage} from '../../redux/productsReducer';

import {ItemCatalog} from './components/ItemCatalog/ItemCatalog';

import IconPlus from '../../icons/IconPlus';
import colors from '../../styles/colors';
import {styles} from './CatalogScreen.styles';
import {PRODUCTS_PATHS} from '../../navigator/navigator.conts';

interface CatalogScreenProps
  extends NativeStackScreenProps<RootStackCatalogParamList, 'catalog-main'> {}

export const CatalogScreen: FunctionComponent<CatalogScreenProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {products} = useSelector((state: StoreType) => state.productsReducer);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (products === null) {
      dispatch(getProductsStorage());
    } else if (products?.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const onAddProduct = () => {
    navigation.navigate(PRODUCTS_PATHS.add);
  };

  if (products === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <View style={styles.containerScrollView}>
          {products.map(product => {
            return (
              <ItemCatalog key={`product-${product.id}`} product={product} />
            );
          })}
        </View> */}

        <FlatList
          renderItem={({item}) => (
            <ItemCatalog key={`product-${item.id}`} product={item} />
          )}
          data={products}
          numColumns={2}
          contentContainerStyle={styles.columnWrapperStyle}
          columnWrapperStyle={styles.columnWrapperStyle}
          key={'product'}
          scrollEnabled={false}
        />
      </ScrollView>
      <View style={styles.containerAddButton}>
        <TouchableOpacity style={styles.addButton} onPress={onAddProduct}>
          <IconPlus width={40} height={40} fill={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
