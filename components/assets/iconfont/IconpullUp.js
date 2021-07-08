/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconpullUp = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M946.944 651.605333L558.08 226.389333a61.184 61.184 0 0 0-91.989333 0l-388.864 425.216a72.106667 72.106667 0 0 0 45.99466599 121.429334L900.69333301 773.034667a71.936 71.936 0 0 0 61.184-46.250667 71.936 71.936 0 0 0-8.36266601-67.242667l-6.570667-7.936z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconpullUp.defaultProps = {
  size: 18,
};

IconpullUp = React.memo ? React.memo(IconpullUp) : IconpullUp;

export default IconpullUp;
