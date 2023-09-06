import {SvgProps} from 'react-native-svg';
import {StyleProp, ViewStyle} from 'react-native';

export type IconType = SvgProps & {
  width?: number;
  height?: number;
  fill?: string;
  style?: StyleProp<ViewStyle>;
};
