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

let IconlineEdit: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M811.648 147.2l65.696 66.24a64 64 0 0 1 0 90.144L353.28 832H864a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32v-118.176L721.152 147.616a64 64 0 0 1 90.496-0.384z m-138.24 139.456L192 772.16v55.232l4.096 4.608h67.04l475.808-479.776-65.536-65.6z m93.184-93.984l-48.128 48.544L784 306.752l47.872-48.256-65.28-65.824z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineEdit.defaultProps = {
  size: 18,
};

IconlineEdit = React.memo ? React.memo(IconlineEdit) : IconlineEdit;

export default IconlineEdit;
