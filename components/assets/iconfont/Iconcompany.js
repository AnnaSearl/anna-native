/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconcompany = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 120A264 264 0 0 1 651.776 608a263.776 263.776 0 0 1 124.224 224 40 40 0 0 1-80 0 184 184 0 0 0-368 0 40 40 0 0 1-80 0 263.808 263.808 0 0 1 124.224-224A264 264 0 0 1 512 120z m0 80a184 184 0 1 0 0 368 184 184 0 0 0 0-368z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcompany.defaultProps = {
  size: 18,
};

Iconcompany = React.memo ? React.memo(Iconcompany) : Iconcompany;

export default Iconcompany;
