import React from 'react';
import {IconType} from './icon.types';
import {Svg, Path} from 'react-native-svg';

const IconBack = (originalProps: IconType) => {
  const {...props} = originalProps;

  return (
    <Svg viewBox="0 0 18 12" {...props}>
      <Path d="M18 5.01562V6.98438H3.84375L7.40625 10.5938L6 12L0 6L6 0L7.40625 1.40625L3.84375 5.01562H18Z" />
    </Svg>
  );
};

export default IconBack;
