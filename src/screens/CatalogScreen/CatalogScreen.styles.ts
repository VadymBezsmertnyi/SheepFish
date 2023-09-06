import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScrollView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 16,
  },
  containerAddButton: {flex: 1, position: 'relative'},
  addButton: {
    width: 64,
    height: 64,
    borderRadius: 40,
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: colors.backgroundTabBar,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
