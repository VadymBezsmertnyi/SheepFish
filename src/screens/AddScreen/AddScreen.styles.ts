import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  containerTitle: {flex: 1, paddingVertical: 12},
  title: {textAlign: 'center'},
  containerButton: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.backgroundTabBar,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonTitle: {color: colors.white},
});
