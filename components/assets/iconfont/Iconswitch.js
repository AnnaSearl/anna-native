/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconswitch = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M444.534154 189.144615h102.734769v102.73477h-102.734769zM468.775385 746.141538h102.734769v102.73477h-102.734769z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
      <Path
        d="M235.126154 646.163692a132.292923 132.292923 0 0 1-3.544616-183.414154l3.544616-3.662769 217.934769-217.954461 41.767385 41.787077-217.93477 217.934769a73.196308 73.196308 0 0 0 100.489847 106.397538l3.032615-2.855384 217.934769-217.954462a132.273231 132.273231 0 0 1 190.601846 183.414154l-3.524923 3.662769L567.492923 791.433846l-41.787077-41.747692 217.954462-217.974154A73.196308 73.196308 0 0 0 643.150769 425.353846l-3.012923 2.855385-217.954461 217.954461a132.273231 132.273231 0 0 1-187.076923 0z"
        fill={getIconColor(color, 1, '#1B2844')}
      />
    </Svg>
  );
};

Iconswitch.defaultProps = {
  size: 18,
};

Iconswitch = React.memo ? React.memo(Iconswitch) : Iconswitch;

export default Iconswitch;
