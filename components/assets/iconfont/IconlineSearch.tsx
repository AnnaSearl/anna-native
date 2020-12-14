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

let IconlineSearch: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M496 96C716.928 96 896 275.072 896 496c0 90.752-30.208 174.432-81.152 241.568l85.024 85.056a32 32 0 1 1-45.248 45.248l-82.496-82.496A398.656 398.656 0 0 1 496 896C275.072 896 96 716.928 96 496S275.072 96 496 96z m0 64C310.432 160 160 310.432 160 496S310.432 832 496 832 832 681.568 832 496 681.568 160 496 160z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineSearch.defaultProps = {
  size: 18,
};

IconlineSearch = React.memo ? React.memo(IconlineSearch) : IconlineSearch;

export default IconlineSearch;
