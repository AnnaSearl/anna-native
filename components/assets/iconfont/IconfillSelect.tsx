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

let IconfillSelect: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 51.2c254.4896 0 460.8 206.3104 460.8 460.8s-206.3104 460.8-460.8 460.8S51.2 766.4896 51.2 512 257.5104 51.2 512 51.2z m217.216 308.48a25.6 25.6 0 0 0-36.1984 0l-235.3664 235.3408L349.0816 486.4a25.6 25.6 0 0 0-36.1984 36.1984l126.72 126.72a25.6 25.6 0 0 0 36.1984 0l253.44-253.44a25.6 25.6 0 0 0 0-36.1984z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconfillSelect.defaultProps = {
  size: 18,
};

IconfillSelect = React.memo ? React.memo(IconfillSelect) : IconfillSelect;

export default IconfillSelect;
