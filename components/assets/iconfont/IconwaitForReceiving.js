/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconwaitForReceiving = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 202.72a24 24 0 0 1 24 24v576a24 24 0 0 1-24 24H192a24 24 0 0 1-24-24v-576a24 24 0 0 1 24-24z m-216 312a24 24 0 0 1-24 24H432a24 24 0 0 1-24-24V448h-192v330.704h592v-330.72h-192z m-48-264.016h-112v240h112v-240z m240 0h-192v149.28h192v-149.28z m-400 149.28v-149.28h-192v149.28h192z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
    </Svg>
  );
};

IconwaitForReceiving.defaultProps = {
  size: 18,
};

IconwaitForReceiving = React.memo ? React.memo(IconwaitForReceiving) : IconwaitForReceiving;

export default IconwaitForReceiving;
