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

let Iconxunjia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M916.210526 94.315789H107.789474A40.421053 40.421053 0 0 0 67.368421 134.736842v635.392l0.188632 3.880421A40.421053 40.421053 0 0 0 107.789474 810.576842l294.965894-0.053895 80.653474 80.680421 3.072 2.775579a40.421053 40.421053 0 0 0 54.110316-2.775579l80.626526-80.680421L916.210526 810.549895a40.421053 40.421053 0 0 0 40.421053-40.421053V134.736842A40.421053 40.421053 0 0 0 916.210526 94.315789z m-40.421052 80.842106v554.522947H604.483368l-3.98821 0.188632a40.421053 40.421053 0 0 0-24.602947 11.641263L512 805.456842l-63.892211-63.919158-2.96421-2.694737a40.421053 40.421053 0 0 0-25.626947-9.135158H148.210526V175.157895h727.578948z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
      <Path
        d="M327.221895 333.608421h369.448421a33.684211 33.684211 0 0 1 0 67.368421h-369.448421a33.684211 33.684211 0 0 1 0-67.368421zM327.221895 508.766316h229.052631a33.684211 33.684211 0 1 1 0 67.368421h-229.052631a33.684211 33.684211 0 0 1 0-67.368421z"
        fill={getIconColor(color, 1, '#1B2844')}
        opacity=".4"
      />
    </Svg>
  );
};

Iconxunjia.defaultProps = {
  size: 18,
};

Iconxunjia = React.memo ? React.memo(Iconxunjia) : Iconxunjia;

export default Iconxunjia;
