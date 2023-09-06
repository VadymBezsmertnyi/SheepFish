import {StyleSheet} from 'react-native';
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#A9A4A0',
    borderRadius: 8,
    padding: 4,
    gap: 4,
    paddingHorizontal: 16,
  },
  label: {fontSize: 12, color: colors.black},
  input: {
    flex: 1,
    paddingVertical: 7,
    height: 200,
    textAlignVertical: 'top',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
});
