/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icondisabled = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 51.2c254.49 0 460.8 206.31 460.8 460.8S766.49 972.8 512 972.8 51.2 766.49 51.2 512 257.51 51.2 512 51.2z m307.149 189.824L241.024 819.149A408.064 408.064 0 0 0 512 921.6c226.227 0 409.6-183.373 409.6-409.6a408.064 408.064 0 0 0-102.451-270.976zM512 102.4c-226.227 0-409.6 183.373-409.6 409.6a408.064 408.064 0 0 0 102.451 270.976l578.125-578.125A408.064 408.064 0 0 0 512 102.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icondisabled.defaultProps = {
  size: 18,
};

Icondisabled = React.memo ? React.memo(Icondisabled) : Icondisabled;

export default Icondisabled;
