/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconforThePayment = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M583.392 137.6A24 24 0 0 1 616 160v136h-48v-101.056L305.248 296H176c-3.104 0-6.064 0.592-8.784 1.664l0.16-0.064z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
      <Path
        d="M848 296H176A24 24 0 0 0 152 320v544a24 24 0 0 0 24 24h672a24 24 0 0 0 24-24V320a24 24 0 0 0-24-24z m-24 48v496h-624v-496h624z"
        fill={getIconColor(color, 1, '#1B2844')}
      />
      <Path
        d="M336 296H176A24 24 0 0 0 152 320v544a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V320a24 24 0 0 0-24-24z m-24 48v496h-112v-496h112zM848 488H672a104 104 0 1 0 0 208h176a24 24 0 0 0 24-24V512a24 24 0 0 0-24-24z m-24 48v112H672a56 56 0 0 1-56-56l0.08-3.072A56 56 0 0 1 672 536h152z"
        fill={getIconColor(color, 2, '#1B2844')}
      />
    </Svg>
  );
};

IconforThePayment.defaultProps = {
  size: 18,
};

IconforThePayment = React.memo ? React.memo(IconforThePayment) : IconforThePayment;

export default IconforThePayment;
