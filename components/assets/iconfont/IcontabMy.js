/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IcontabMy = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M356.173913 890.434783m27.826087 0l256 0q27.826087 0 27.826087 27.826087l0 0q0 27.826087-27.826087 27.826087l-256 0q-27.826087 0-27.826087-27.826087l0 0q0-27.826087 27.826087-27.826087Z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
      <Path
        d="M712.347826 178.086957a133.565217 133.565217 0 0 1 133.565217 133.565217v200.347826c0 184.409043-149.504 333.913043-333.913043 333.913043-184.409043 0-333.913043-149.504-333.913043-333.913043 0-184.409043 149.504-333.913043 333.913043-333.913043h200.347826z m0 55.652173h-200.347826C358.310957 233.73913 233.73913 358.310957 233.73913 512S358.310957 790.26087 512 790.26087c151.373913 0 274.543304-120.876522 278.171826-271.404522L790.26087 512v-200.347826a77.913043 77.913043 0 0 0-73.638957-77.801739L712.347826 233.73913z"
        fill={getIconColor(color, 1, '#1B2844')}
      />
    </Svg>
  );
};

IcontabMy.defaultProps = {
  size: 18,
};

IcontabMy = React.memo ? React.memo(IcontabMy) : IcontabMy;

export default IcontabMy;
