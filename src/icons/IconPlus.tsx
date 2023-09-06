import React from 'react';
import {IconType} from './icon.types';
import {Svg, Path} from 'react-native-svg';

const IconPlus = (originalProps: IconType) => {
  const {...props} = originalProps;

  return (
    <Svg viewBox="0 0 40 40" {...props}>
      <Path d="M31.1752 21.575H21.5752V31.175H18.4252V21.575H8.8252V18.425H18.4252V8.82501H21.5752V18.425H31.1752V21.575Z" />
    </Svg>
  );
};

export default IconPlus;
