/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconlogo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M268.8 147.2m51.84 0l377.856 0q51.84 0 51.84 51.84l0 0q0 51.84-51.84 51.84l-377.856 0q-51.84 0-51.84-51.84l0 0q0-51.84 51.84-51.84Z"
        fill={getIconColor(color, 0, '#407360')}
      />
      <Path
        d="M372.48 199.04v619.776a51.84 51.84 0 1 1-103.68 0V199.04a51.84 51.84 0 1 1 103.68 0z"
        fill={getIconColor(color, 1, '#407360')}
      />
      <Path
        d="M752.64 870.656m-51.84 0l-177.408 0q-51.84 0-51.84-51.84l0 0q0-51.84 51.84-51.84l177.408 0q51.84 0 51.84 51.84l0 0q0 51.84-51.84 51.84Z"
        fill={getIconColor(color, 2, '#407360')}
      />
      <Path
        d="M575.232 487.04v331.776a51.84 51.84 0 0 1-103.68 0V487.04a51.84 51.84 0 0 1 103.68 0zM699.584 557.312c35.2896-29.6192 52.928-54.1824 52.928-73.7024 0-29.28-23.6928-53.0176-52.928-53.0176-29.2288 0-52.928 23.7376-52.928 53.0176 0 19.52 17.6448 44.0832 52.928 73.7024z"
        fill={getIconColor(color, 3, '#407360')}
      />
    </Svg>
  );
};

Iconlogo.defaultProps = {
  size: 18,
};

Iconlogo = React.memo ? React.memo(Iconlogo) : Iconlogo;

export default Iconlogo;
