/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconpurchaselistFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M325.818182 162.909091v46.545454a46.545455 46.545455 0 0 0 43.054545 46.429091L372.363636 256h279.272728a46.545455 46.545455 0 0 0 46.429091-43.054545L698.181818 209.454545V162.909091h116.363637a23.272727 23.272727 0 0 1 23.272727 23.272727v698.181818a23.272727 23.272727 0 0 1-23.272727 23.272728H209.454545a23.272727 23.272727 0 0 1-23.272727-23.272728V186.181818a23.272727 23.272727 0 0 1 23.272727-23.272727h116.363637z m349.090909 512H349.090909a23.272727 23.272727 0 0 0-23.109818 20.549818L325.818182 698.181818v23.272727a23.272727 23.272727 0 0 0 20.549818 23.109819L349.090909 744.727273h325.818182a23.272727 23.272727 0 0 0 23.109818-20.549818L698.181818 721.454545v-23.272727a23.272727 23.272727 0 0 0-23.272727-23.272727z m0-139.636364H349.090909a23.272727 23.272727 0 0 0-23.109818 20.549818L325.818182 558.545455v23.272727a23.272727 23.272727 0 0 0 20.549818 23.109818L349.090909 605.090909h325.818182a23.272727 23.272727 0 0 0 23.109818-20.549818L698.181818 581.818182v-23.272727a23.272727 23.272727 0 0 0-23.272727-23.272728z m0-139.636363H349.090909a23.272727 23.272727 0 0 0-23.109818 20.549818L325.818182 418.909091v23.272727a23.272727 23.272727 0 0 0 20.549818 23.109818L349.090909 465.454545h325.818182a23.272727 23.272727 0 0 0 23.109818-20.549818L698.181818 442.181818v-23.272727a23.272727 23.272727 0 0 0-23.272727-23.272727zM628.363636 116.363636a23.272727 23.272727 0 0 1 23.272728 23.272728v46.545454a23.272727 23.272727 0 0 1-23.272728 23.272727H395.636364a23.272727 23.272727 0 0 1-23.272728-23.272727V139.636364a23.272727 23.272727 0 0 1 23.272728-23.272728h232.727272z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
    </Svg>
  );
};

IconpurchaselistFill.defaultProps = {
  size: 18,
};

IconpurchaselistFill = React.memo ? React.memo(IconpurchaselistFill) : IconpurchaselistFill;

export default IconpurchaselistFill;
