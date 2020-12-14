/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Icon11: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 290.133333a51.2 51.2 0 0 1 51.2 51.2v409.6a51.2 51.2 0 0 1-51.2 51.2H467.8144l-113.629867 64.785067a25.6 25.6 0 0 1-8.942933 3.089067l-2.372267 0.238933a25.6 25.6 0 0 1-26.9312-24.183467L313.582933 802.133333H256a51.2 51.2 0 0 1-51.2-51.2V341.333333a51.2 51.2 0 0 1 51.2-51.2h597.333333z"
        fill={getIconColor(color, 0, '#D7EAFF')}
      />
      <Path
        d="M844.8 192A64 64 0 0 1 908.8 256v460.8a64 64 0 0 1-64 64H390.6048l-150.186667 82.295467a25.6 25.6 0 0 1-8.055466 2.798933l-2.833067 0.324267a25.6 25.6 0 0 1-26.7264-21.674667l-0.256-2.474667-3.4304-61.269333H166.4A64 64 0 0 1 102.4 716.8V256a64 64 0 0 1 64-64H844.8z m0 38.4H166.4a25.6 25.6 0 0 0-25.480533 23.1424L140.8 256v460.8a25.6 25.6 0 0 0 23.1424 25.480533l2.4576 0.119467h69.034667l4.317866 77.2608 141.021867-77.2608H844.8a25.6 25.6 0 0 0 25.480533-23.1424L870.4 716.8V256a25.6 25.6 0 0 0-23.1424-25.480533L844.8 230.4z"
        fill={getIconColor(color, 1, '#1467FF')}
      />
      <Path
        d="M534.5792 618.666667V564.906667h59.4944v-23.6544h-59.4944v-29.7472l0.3584-0.3584h59.136v-23.6544h-45.8752l68.8128-124.7232h-50.8928L512 470.647467l-54.1184-107.8784h-50.8928l68.8128 124.7232h-45.5168v23.6544h58.7776l0.3584 0.3584v29.7472h-59.136V564.906667h59.136v53.76z"
        fill={getIconColor(color, 2, '#1467FF')}
      />
    </Svg>
  );
};

Icon11.defaultProps = {
  size: 18,
};

Icon11 = React.memo ? React.memo(Icon11) : Icon11;

export default Icon11;
