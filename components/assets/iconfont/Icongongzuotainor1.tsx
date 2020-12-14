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

let Icongongzuotainor1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M930.909091 162.909091v535.272727a69.818182 69.818182 0 0 1-69.818182 69.818182H162.909091a69.818182 69.818182 0 0 1-69.818182-69.818182V232.727273a69.818182 69.818182 0 0 1 69.818182-69.818182h768z m-161.28 161.698909a34.909091 34.909091 0 0 0-49.384727-0.395636l-183.714909 180.736-89.972364-88.506182-2.629818-2.350546a34.909091 34.909091 0 0 0-46.312728 2.327273l-142.824727 140.520727-2.420363 2.629819a34.909091 34.909091 0 0 0 2.024727 46.731636l2.629818 2.420364a34.909091 34.909091 0 0 0 46.731636-2.024728l118.318546-116.410182 89.972363 88.529455 2.653091 2.327273a34.909091 34.909091 0 0 0 46.312728-2.327273l208.197818-204.846545 2.420363-2.629819a34.909091 34.909091 0 0 0-2.024727-46.731636z"
        fill={getIconColor(color, 0, '#9DA1AD')}
      />
      <Path
        d="M162.909091 837.818182m34.909091 0l628.363636 0q34.909091 0 34.909091 34.909091l0 0q0 34.909091-34.909091 34.909091l-628.363636 0q-34.909091 0-34.909091-34.909091l0 0q0-34.909091 34.909091-34.909091Z"
        fill={getIconColor(color, 1, '#9DA1AD')}
      />
    </Svg>
  );
};

Icongongzuotainor1.defaultProps = {
  size: 18,
};

Icongongzuotainor1 = React.memo ? React.memo(Icongongzuotainor1) : Icongongzuotainor1;

export default Icongongzuotainor1;
