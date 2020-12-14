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

let IconlineDelete32: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M864 192a32 32 0 0 1 0 64h-32v608a64 64 0 0 1-64 64H256a64 64 0 0 1-64-64V256H160a32 32 0 1 1 0-64h205.312a160.032 160.032 0 0 1 293.376 0H864z m-96 64H256v608h512V256z m-352 160a32 32 0 0 1 32 32v224a32 32 0 0 1-64 0v-224a32 32 0 0 1 32-32z m192 0a32 32 0 0 1 32 32v224a32 32 0 0 1-64 0v-224a32 32 0 0 1 32-32z m-96-256a95.68 95.68 0 0 0-67.296 27.52l-4.288 4.48h143.136l-3.2-3.424a95.808 95.808 0 0 0-62.688-28.416L512 160z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineDelete32.defaultProps = {
  size: 18,
};

IconlineDelete32 = React.memo ? React.memo(IconlineDelete32) : IconlineDelete32;

export default IconlineDelete32;
