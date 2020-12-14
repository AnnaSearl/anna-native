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

let IconfillError: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c229.76 0 416 186.24 416 416s-186.24 416-416 416S96 741.76 96 512 282.24 96 512 96z m-113.152 257.6a32 32 0 0 0-45.248 45.248L466.752 512l-113.152 113.152a32 32 0 0 0 45.248 45.248L512 557.248l113.152 113.152a32 32 0 0 0 45.248-45.248L557.248 512l113.152-113.152a32 32 0 0 0-45.248-45.248L512 466.752z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconfillError.defaultProps = {
  size: 18,
};

IconfillError = React.memo ? React.memo(IconfillError) : IconfillError;

export default IconfillError;
