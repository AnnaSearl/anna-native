/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconicLineEliminate = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M166.944 928a32 32 0 0 1-31.36-38.208L203.904 544H192a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h224V128a32 32 0 0 1 32-32h128a32 32 0 0 1 32 32v160h224a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-11.968l68.416 345.792A32 32 0 0 1 857.056 928H166.944z m587.84-384H269.184L205.888 864h178.08L384 736h64v128h128v-128h64v128h178.08l-63.296-320zM800 352H224v128h576v-128z m-256-192h-64v128h64V160z"
        fill={getIconColor(color, 0, '#697184')}
      />
    </Svg>
  );
};

IconicLineEliminate.defaultProps = {
  size: 18,
};

IconicLineEliminate = React.memo ? React.memo(IconicLineEliminate) : IconicLineEliminate;

export default IconicLineEliminate;
