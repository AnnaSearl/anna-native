/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconclassFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M465.454545 558.545455v325.818181H139.636364V558.545455h325.818181z m418.909091 0v325.818181H558.545455V558.545455h325.818181zM465.454545 139.636364v325.818181H139.636364V139.636364h325.818181z m418.909091 0v325.818181H558.545455V139.636364h325.818181z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
    </Svg>
  );
};

IconclassFill.defaultProps = {
  size: 18,
};

IconclassFill = React.memo ? React.memo(IconclassFill) : IconclassFill;

export default IconclassFill;
