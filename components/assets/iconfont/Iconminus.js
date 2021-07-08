/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconminus = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m85.333333 0l853.333334 0q85.333333 0 85.333333 85.333333l0 853.333334q0 85.333333-85.333333 85.333333l-853.333334 0q-85.333333 0-85.333333-85.333333l0-853.333334q0-85.333333 85.333333-85.333333Z"
        fill={getIconColor(color, 0, '#F7F7F7')}
      />
      <Path
        d="M298.666667 490.666667m21.333333 0l384 0q21.333333 0 21.333333 21.333333l0 0q0 21.333333-21.333333 21.333333l-384 0q-21.333333 0-21.333333-21.333333l0 0q0-21.333333 21.333333-21.333333Z"
        fill={getIconColor(color, 1, '#495369')}
      />
    </Svg>
  );
};

Iconminus.defaultProps = {
  size: 18,
};

Iconminus = React.memo ? React.memo(Iconminus) : Iconminus;

export default Iconminus;
