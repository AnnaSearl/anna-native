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

let Iconkejian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 192C298.656 192 116.48 324.704 42.656 512c73.824 187.296 256 320 469.344 320s395.52-132.704 469.344-320C907.52 324.704 725.344 192 512 192z m0 512c-105.984 0-192-86.016-192-192s86.016-192 192-192 192 86.016 192 192-86.016 192-192 192z m128-416c-53.12 0-96 42.88-96 96s42.88 96 96 96 96-42.88 96-96-42.88-96-96-96z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconkejian.defaultProps = {
  size: 18,
};

Iconkejian = React.memo ? React.memo(Iconkejian) : Iconkejian;

export default Iconkejian;
