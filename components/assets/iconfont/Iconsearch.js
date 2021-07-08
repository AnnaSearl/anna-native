/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconsearch = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1056 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c212.064 0 384 171.936 384 384 0 98.592-37.152 188.512-98.24 256.512l97.44 97.44a32 32 0 1 1-45.248 45.248l-98.752-98.784A382.4 382.4 0 0 1 512 864C299.936 864 128 692.064 128 480S299.936 96 512 96z m0 64C335.264 160 192 303.264 192 480s143.264 320 320 320 320-143.264 320-320S688.736 160 512 160z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
    </Svg>
  );
};

Iconsearch.defaultProps = {
  size: 18,
};

Iconsearch = React.memo ? React.memo(Iconsearch) : Iconsearch;

export default Iconsearch;
