/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconcustom = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 160h-170.666667A96 96 0 0 0 117.333333 256v392.490667a181.333333 181.333333 0 0 0 75.946667 147.541333l61.994667 44.288a74.666667 74.666667 0 0 0 86.784 0l62.016-44.288a181.333333 181.333333 0 0 0 75.925333-147.541333V256A96 96 0 0 0 384 160z m-170.666667 64h170.666667a32 32 0 0 1 32 32v392.490667a117.333333 117.333333 0 0 1-49.130667 95.466666L304.853333 788.266667a10.666667 10.666667 0 0 1-12.416 0l-61.994666-44.288A117.333333 117.333333 0 0 1 181.333333 648.490667V256a32 32 0 0 1 32-32z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
      <Path
        d="M181.333333 298.666667h234.666667v64h-234.666667zM181.333333 597.333333h234.666667v64h-234.666667zM608 320h85.333333a32 32 0 0 1 0 64h-85.333333v-64zM608 469.333333h128a32 32 0 0 1 0 64h-128v-64zM608 618.666667h85.333333a32 32 0 0 1 0 64h-85.333333v-64z"
        fill={getIconColor(color, 1, '#A4A9B4')}
      />
      <Path
        d="M810.666667 160h-170.666667a96 96 0 0 0-96 96v512a96 96 0 0 0 96 96h170.666667a96 96 0 0 0 96-96V256A96 96 0 0 0 810.666667 160z m-170.666667 64h170.666667a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32h-170.666667a32 32 0 0 1-32-32V256a32 32 0 0 1 32-32z"
        fill={getIconColor(color, 2, '#1B2844')}
      />
    </Svg>
  );
};

Iconcustom.defaultProps = {
  size: 18,
};

Iconcustom = React.memo ? React.memo(Iconcustom) : Iconcustom;

export default Iconcustom;
