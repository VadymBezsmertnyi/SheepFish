import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  imageContainer: {flex: 1},
  image: {height: 200},
  title: {fontSize: 24, fontWeight: '600', color: colors.black},
  price: {fontSize: 18, fontWeight: '500', color: colors.black},
  descriptionContainer: {gap: 5},
  descriptionTitle: {fontSize: 18, fontWeight: '500', color: colors.black},
  description: {fontSize: 16, color: colors.black},
});
