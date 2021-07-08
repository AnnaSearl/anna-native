/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconpullDown = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M77.056 372.394667L465.92 797.610667a61.184 61.184 0 0 0 91.989333 0l388.864-425.216a72.106667 72.106667 0 0 0-45.994666-121.429334H123.306667a71.936 71.936 0 0 0-61.184 46.250667 71.936 71.936 0 0 0 8.362666 67.242667l6.570667 7.936z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconpullDown.defaultProps = {
  size: 18,
};

IconpullDown = React.memo ? React.memo(IconpullDown) : IconpullDown;

export default IconpullDown;
