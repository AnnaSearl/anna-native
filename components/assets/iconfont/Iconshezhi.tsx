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

let Iconshezhi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M679.343158 94.315789H344.656842c-48.693895 0-93.776842 25.438316-118.325895 66.937264L58.987789 444.362105a132.715789 132.715789 0 0 0 0 135.329684l167.343158 283.082106a137.323789 137.323789 0 0 0 118.298948 66.937263H679.343158c48.693895 0 93.776842-25.438316 118.325895-66.937263l167.343158-283.082106a132.715789 132.715789 0 0 0 0-135.329684l-167.343158-283.082105a137.323789 137.323789 0 0 0-118.298948-66.937263z m-334.686316 80.842106h334.686316c20.264421 0 38.804211 10.482526 48.747789 27.243789l167.343158 283.082105c9.728 16.437895 9.728 36.594526 0 53.032422L728.117895 821.625263A56.481684 56.481684 0 0 1 679.343158 848.842105H344.656842c-20.264421 0-38.804211-10.482526-48.747789-27.243789l-167.343158-283.082105a51.873684 51.873684 0 0 1 0-53.032422L295.882105 202.374737A56.481684 56.481684 0 0 1 344.656842 175.157895z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
      <Path
        d="M512 319.326316a189.305263 189.305263 0 1 0 0 378.610526 189.305263 189.305263 0 0 0 0-378.610526z m0 80.842105a108.463158 108.463158 0 1 1 0 216.926316 108.463158 108.463158 0 0 1 0-216.926316z"
        fill={getIconColor(color, 1, '#1B2844')}
        opacity=".4"
      />
    </Svg>
  );
};

Iconshezhi.defaultProps = {
  size: 18,
};

Iconshezhi = React.memo ? React.memo(Iconshezhi) : Iconshezhi;

export default Iconshezhi;
