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

let IconlineReduce: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c229.76 0 416 186.24 416 416s-186.24 416-416 416S96 741.76 96 512 282.24 96 512 96z m0 64C317.6 160 160 317.6 160 512s157.6 352 352 352 352-157.6 352-352S706.4 160 512 160z m160 320a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64h320z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineReduce.defaultProps = {
  size: 18,
};

IconlineReduce = React.memo ? React.memo(IconlineReduce) : IconlineReduce;

export default IconlineReduce;
