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

let Iconkehunor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M930.909091 186.181818v581.818182a69.818182 69.818182 0 0 1-69.818182 69.818182H162.909091a69.818182 69.818182 0 0 1-69.818182-69.818182V256a69.818182 69.818182 0 0 1 69.818182-69.818182h768zM372.363636 581.818182h-139.636363a46.545455 46.545455 0 1 0 0 93.090909h139.636363a46.545455 46.545455 0 1 0 0-93.090909z m442.181819 23.272727H535.272727a23.272727 23.272727 0 0 0-2.722909 46.382546L535.272727 651.636364h279.272728a23.272727 23.272727 0 0 0 0-46.545455zM302.545455 349.090909a93.090909 93.090909 0 1 0 0 186.181818 93.090909 93.090909 0 0 0 0-186.181818z m512 139.636364H535.272727a23.272727 23.272727 0 0 0-2.722909 46.382545L535.272727 535.272727h279.272728a23.272727 23.272727 0 0 0 0-46.545454z m-93.09091-116.363637h-186.181818a23.272727 23.272727 0 0 0-2.722909 46.382546L535.272727 418.909091h186.181818a23.272727 23.272727 0 0 0 0-46.545455z"
        fill={getIconColor(color, 0, '#9DA1AD')}
      />
      <Path
        d="M186.181818 581.818182m46.545455 0l139.636363 0q46.545455 0 46.545455 46.545454l0 0q0 46.545455-46.545455 46.545455l-139.636363 0q-46.545455 0-46.545455-46.545455l0 0q0-46.545455 46.545455-46.545454Z"
        fill={getIconColor(color, 1, '#9DA1AD')}
        opacity=".5"
      />
    </Svg>
  );
};

Iconkehunor.defaultProps = {
  size: 18,
};

Iconkehunor = React.memo ? React.memo(Iconkehunor) : Iconkehunor;

export default Iconkehunor;
