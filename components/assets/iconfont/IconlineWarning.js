/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconlineWarning = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c229.76 0 416 186.24 416 416s-186.24 416-416 416S96 741.76 96 512 282.24 96 512 96z m0 64C317.6 160 160 317.6 160 512s157.6 352 352 352 352-157.6 352-352S706.4 160 512 160z m0 480a32 32 0 1 1 0 64 32 32 0 0 1 0-64z m0-320a32 32 0 0 1 32 32v224a32 32 0 0 1-64 0v-224a32 32 0 0 1 32-32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineWarning.defaultProps = {
  size: 18,
};

IconlineWarning = React.memo ? React.memo(IconlineWarning) : IconlineWarning;

export default IconlineWarning;
