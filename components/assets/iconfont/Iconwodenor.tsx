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

let Iconwodenor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M232.727273 837.818182m69.818182 0l418.90909 0q69.818182 0 69.818182 69.818182l0 0q0 69.818182-69.818182 69.818181l-418.90909 0q-69.818182 0-69.818182-69.818181l0 0q0-69.818182 69.818182-69.818182Z"
        fill={getIconColor(color, 0, '#9DA1AD')}
        opacity=".5"
      />
      <Path
        d="M512 93.090909h209.454545a139.636364 139.636364 0 0 1 139.636364 139.636364v209.454545c0 192.791273-156.299636 349.090909-349.090909 349.090909-192.791273 0-349.090909-156.299636-349.090909-349.090909C162.909091 249.390545 319.208727 93.090909 512 93.090909z"
        fill={getIconColor(color, 1, '#9DA1AD')}
      />
    </Svg>
  );
};

Iconwodenor.defaultProps = {
  size: 18,
};

Iconwodenor = React.memo ? React.memo(Iconwodenor) : Iconwodenor;

export default Iconwodenor;
