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

let Iconweihuikuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M916.210526 67.368421H107.789474A40.421053 40.421053 0 0 0 67.368421 107.789474v677.322105a40.421053 40.421053 0 0 0 27.944421 38.453895l370.957474 120.32a148.210526 148.210526 0 0 0 91.459368 0l370.957474-120.32a40.421053 40.421053 0 0 0 27.944421-38.453895V107.789474A40.421053 40.421053 0 0 0 916.210526 67.368421z m-40.421052 80.842105v607.501474l-343.013053 111.265684-5.12 1.428211a67.368421 67.368421 0 0 1-36.432842-1.428211L148.210526 755.738947V148.210526h727.578948z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
      <Path
        d="M474.489263 530.458947v-35.22021h-82.189474a40.474947 40.474947 0 1 1 0-80.949895h66.640843l-55.053474-59.014737a41.984 41.984 0 0 1-0.10779-57.182316 36.298105 36.298105 0 0 1 53.167158-0.080842L512 357.025684l55.053474-59.014737a36.298105 36.298105 0 0 1 53.167158 0.080842 41.984 41.984 0 0 1-0.10779 57.155369l-55.053474 59.014737h66.640843a40.474947 40.474947 0 1 1 0 80.976842h-82.189474v35.22021h82.189474a40.474947 40.474947 0 1 1 0 80.976842h-82.189474v78.632422a37.510737 37.510737 0 1 1-75.021474 0V611.435789h-82.189474a40.474947 40.474947 0 1 1 0-80.976842h82.189474z"
        fill={getIconColor(color, 1, '#1B2844')}
        opacity=".4"
      />
    </Svg>
  );
};

Iconweihuikuan.defaultProps = {
  size: 18,
};

Iconweihuikuan = React.memo ? React.memo(Iconweihuikuan) : Iconweihuikuan;

export default Iconweihuikuan;
