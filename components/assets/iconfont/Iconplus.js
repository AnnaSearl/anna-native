/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconplus = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m85.333333 0l853.333334 0q85.333333 0 85.333333 85.333333l0 853.333334q0 85.333333-85.333333 85.333333l-853.333334 0q-85.333333 0-85.333333-85.333333l0-853.333334q0-85.333333 85.333333-85.333333Z"
        fill={getIconColor(color, 0, '#F7F7F7')}
      />
      <Path
        d="M512 298.666667a21.333333 21.333333 0 0 1 21.333333 21.333333v170.666667h170.666667a21.333333 21.333333 0 0 1 0 42.666666h-170.688L533.333333 704a21.333333 21.333333 0 0 1-42.666666 0l-0.021334-170.666667H320a21.333333 21.333333 0 0 1 0-42.666666h170.666667v-170.666667a21.333333 21.333333 0 0 1 21.333333-21.333333z"
        fill={getIconColor(color, 1, '#495369')}
      />
    </Svg>
  );
};

Iconplus.defaultProps = {
  size: 18,
};

Iconplus = React.memo ? React.memo(Iconplus) : Iconplus;

export default Iconplus;
