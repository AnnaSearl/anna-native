/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconafterSale = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M848 168a24 24 0 0 1 24 24v640a24 24 0 0 1-24 24H208a24 24 0 0 1-24-24V192a24 24 0 0 1 24-24zM824 416h-592v392h592V416zM467.568 590.816l-31.968 35.808-72.288-64.544a24 24 0 0 1-1.648-34.192l1.808-1.76 72.272-63.44 31.68 36.064L443.2 520h139.664a104 104 0 0 1 3.728 207.936l-3.728 0.064H400v-48h182.864a56 56 0 0 0 3.072-111.92l-3.072-0.08h-140.848l25.552 22.816zM824 216h-592V368h592v-152z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
    </Svg>
  );
};

IconafterSale.defaultProps = {
  size: 18,
};

IconafterSale = React.memo ? React.memo(IconafterSale) : IconafterSale;

export default IconafterSale;
