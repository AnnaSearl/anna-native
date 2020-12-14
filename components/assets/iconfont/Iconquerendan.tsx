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

let Iconquerendan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M916.210526 67.368421H107.789474A40.421053 40.421053 0 0 0 67.368421 107.789474v808.421052A40.421053 40.421053 0 0 0 107.789474 956.631579h485.052631c200.919579 0 363.789474-162.869895 363.789474-363.789474V107.789474A40.421053 40.421053 0 0 0 916.210526 67.368421z m-40.421052 80.842105V592.842105l-0.10779 7.653053C871.639579 753.232842 746.549895 875.789474 592.842105 875.789474H148.210526v-727.578948h727.578948z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
      <Path
        d="M712.084211 350.908632l-256.269474 266.159157-145.866105-131.664842a36.109474 36.109474 0 0 0-52.33179 4.015158 38.723368 38.723368 0 0 0 3.826526 53.005474l171.924211 155.216842a36.001684 36.001684 0 0 0 50.391579-1.805474l280.656842-291.543579a38.723368 38.723368 0 0 0 0.188632-53.194105 36.082526 36.082526 0 0 0-52.520421-0.188631z"
        fill={getIconColor(color, 1, '#1B2844')}
        opacity=".4"
      />
    </Svg>
  );
};

Iconquerendan.defaultProps = {
  size: 18,
};

Iconquerendan = React.memo ? React.memo(Iconquerendan) : Iconquerendan;

export default Iconquerendan;
