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

let Iconbukejian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M172.576 127.36l724.096 724.064a32 32 0 0 1-45.248 45.248L127.328 172.576A32 32 0 0 1 172.576 127.36z m8.064 189.024l145.856 145.92a192.064 192.064 0 0 0 235.232 235.2l108.96 108.96C620.8 823.04 567.456 832 512 832 298.656 832 116.48 699.296 42.656 512a506.912 506.912 0 0 1 137.984-195.616zM512 192c213.344 0 395.52 132.704 469.344 320a506.912 506.912 0 0 1-137.984 195.584l-145.856-145.888a192.064 192.064 0 0 0-235.232-235.2L353.28 217.568A502.816 502.816 0 0 1 512 192z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconbukejian.defaultProps = {
  size: 18,
};

Iconbukejian = React.memo ? React.memo(Iconbukejian) : Iconbukejian;

export default Iconbukejian;
