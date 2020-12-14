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

let Icon2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M744.6016 268.8L532.036267 481.348267a25.6 25.6 0 1 0 36.1984 36.1984l242.107733-242.090667A51.182933 51.182933 0 0 1 836.266667 320v460.8a51.2 51.2 0 0 1-51.2 51.2H307.2a51.2 51.2 0 0 1-51.2-51.2v-460.8a51.2 51.2 0 0 1 51.2-51.2h437.4016zM704 665.6h-409.6a25.6 25.6 0 0 0 0 51.2h409.6a25.6 25.6 0 0 0 0-51.2zM435.2 537.6h-140.8a25.6 25.6 0 0 0 0 51.2h140.8a25.6 25.6 0 0 0 0-51.2z"
        fill={getIconColor(color, 0, '#D7EAFF')}
      />
      <Path
        d="M672.290133 172.8a19.2 19.2 0 0 1 2.0992 38.280533l-2.0992 0.119467H230.4c-16.827733 0-30.634667 12.987733-31.914667 29.4912l-0.085333 2.5088V768c0 16.827733 12.987733 30.634667 29.4912 31.914667l2.5088 0.085333H768c16.827733 0 30.634667-12.987733 31.914667-29.4912l0.085333-2.5088V390.4a19.2 19.2 0 0 1 38.280533-2.0992l0.119467 2.0992V768a70.4 70.4 0 0 1-66.901333 70.314667l-3.498667 0.085333H230.4a70.4 70.4 0 0 1-70.314667-66.901333L160 768V243.2a70.4 70.4 0 0 1 66.901333-70.314667l3.498667-0.085333h441.890133z"
        fill={getIconColor(color, 1, '#1467FF')}
      />
      <Path
        d="M839.765333 173.636267a25.6 25.6 0 0 1 36.1984 36.1984L568.234667 517.563733a25.6 25.6 0 0 1-36.1984-36.1984l307.729066-307.729066zM704 665.6a25.6 25.6 0 0 1 0 51.2h-409.6a25.6 25.6 0 0 1 0-51.2h409.6zM435.2 537.6a25.6 25.6 0 0 1 0 51.2h-140.8a25.6 25.6 0 0 1 0-51.2h140.8z"
        fill={getIconColor(color, 2, '#1467FF')}
      />
    </Svg>
  );
};

Icon2.defaultProps = {
  size: 18,
};

Icon2 = React.memo ? React.memo(Icon2) : Icon2;

export default Icon2;
