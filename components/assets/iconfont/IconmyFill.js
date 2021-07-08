/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconmyFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 581.818182c205.661091 0 372.363636 166.702545 372.363636 372.363636H139.636364c0-205.661091 166.702545-372.363636 372.363636-372.363636z m0-442.181818a186.181818 186.181818 0 1 1 0 372.363636 186.181818 186.181818 0 0 1 0-372.363636z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
    </Svg>
  );
};

IconmyFill.defaultProps = {
  size: 18,
};

IconmyFill = React.memo ? React.memo(IconmyFill) : IconmyFill;

export default IconmyFill;
