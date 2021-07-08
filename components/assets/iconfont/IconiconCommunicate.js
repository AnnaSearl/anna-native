/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconCommunicate = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 128a64 64 0 0 1 64 64v576a64 64 0 0 1-64 64h-268.416a64 64 0 0 0-35.456 10.72l-44.64 29.696a64 64 0 0 1-70.912 0l-44.704-29.728A64 64 0 0 0 396.416 832H128a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h768z m0 64H128v576h268.416a128 128 0 0 1 63.744 16.992l7.136 4.416 44.736 29.76 44.64-29.76a128 128 0 0 1 62.528-21.12l8.384-0.288H896V192zM313.6 416a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z m204.8 0a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z m204.8 0a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z"
        fill={getIconColor(color, 0, '#495369')}
      />
    </Svg>
  );
};

IconiconCommunicate.defaultProps = {
  size: 18,
};

IconiconCommunicate = React.memo ? React.memo(IconiconCommunicate) : IconiconCommunicate;

export default IconiconCommunicate;
