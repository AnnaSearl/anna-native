/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IcondeleteLajitong = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 353.952a32 32 0 0 1 31.776 28.256l0.224 3.744V736a128 128 0 0 1-121.6 127.84L672 864H352a128 128 0 0 1-127.84-121.6L224 736V385.952a32 32 0 0 1 63.776-3.744l0.224 3.744V736a64 64 0 0 0 59.2 63.84L352 800h320a64 64 0 0 0 63.84-59.2L736 736V385.952a32 32 0 0 1 32-32zM448 352a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0v-288a32 32 0 0 1 32-32z m128 0a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0v-288a32 32 0 0 1 32-32z m32-224a32 32 0 0 1 0 64h192a32 32 0 0 1 0 64H224a32 32 0 1 1 0-64h192a32 32 0 0 1 0-64h192z"
        fill={getIconColor(color, 0, '#697184')}
      />
    </Svg>
  );
};

IcondeleteLajitong.defaultProps = {
  size: 18,
};

IcondeleteLajitong = React.memo ? React.memo(IcondeleteLajitong) : IcondeleteLajitong;

export default IcondeleteLajitong;
