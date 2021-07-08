/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconfillError = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c229.76 0 416 186.24 416 416S741.76 928 512 928 96 741.76 96 512 282.24 96 512 96zM398.848 353.6a32 32 0 0 0-45.248 45.248L466.752 512 353.6 625.152a32 32 0 0 0 45.248 45.248L512 557.248 625.152 670.4a32 32 0 0 0 45.248-45.248L557.248 512 670.4 398.848a32 32 0 0 0-45.248-45.248L512 466.752z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconfillError.defaultProps = {
  size: 18,
};

IconfillError = React.memo ? React.memo(IconfillError) : IconfillError;

export default IconfillError;
