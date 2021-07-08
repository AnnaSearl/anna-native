/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconhomeFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 116.363636l395.636364 279.272728v465.454545H605.090909v-186.181818a93.090909 93.090909 0 1 0-186.181818 0v186.181818H116.363636V395.636364L512 116.363636z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
    </Svg>
  );
};

IconhomeFill.defaultProps = {
  size: 18,
};

IconhomeFill = React.memo ? React.memo(IconhomeFill) : IconhomeFill;

export default IconhomeFill;
