/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconsharePictures = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#F7F7F7')}
      />
      <Path
        d="M334.875676 312.735135h354.248648a66.421622 66.421622 0 0 1 66.421622 66.421622v265.686486a66.421622 66.421622 0 0 1-66.421622 66.421622H334.875676a66.421622 66.421622 0 0 1-66.421622-66.421622V379.156757a66.421622 66.421622 0 0 1 66.421622-66.421622z"
        fill={getIconColor(color, 1, '#1B2844')}
      />
      <Path
        d="M323.805405 401.297297a33.210811 33.210811 0 1 0 66.421622 0 33.210811 33.210811 0 0 0-66.421622 0zM340.590703 657.020541a22.292757 22.292757 0 0 1-19.372973-33.34919l50.798702-88.783567a22.33427 22.33427 0 0 1 38.745946 0l54.770163 95.716324 102.759783-147.788108a22.33427 22.33427 0 0 1 36.656433 0l96.795675 139.222486a22.265081 22.265081 0 0 1-18.335135 34.995892H340.590703v-0.013837z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
    </Svg>
  );
};

IconsharePictures.defaultProps = {
  size: 18,
};

IconsharePictures = React.memo ? React.memo(IconsharePictures) : IconsharePictures;

export default IconsharePictures;
