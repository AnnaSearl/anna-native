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

let IconlineCenter32: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M265.376 941.92a32 32 0 0 1 0-45.248L650.016 512 265.408 127.36a32 32 0 0 1 45.248-45.28l407.296 407.296a32 32 0 0 1 0 45.248L310.624 941.92a32 32 0 0 1-45.248 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineCenter32.defaultProps = {
  size: 18,
};

IconlineCenter32 = React.memo ? React.memo(IconlineCenter32) : IconlineCenter32;

export default IconlineCenter32;
