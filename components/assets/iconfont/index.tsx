/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconweihuikuan from './Iconweihuikuan';
import Iconkehunor from './Iconkehunor';
import Iconquerendan from './Iconquerendan';
import Iconshezhi from './Iconshezhi';
import Iconxunjia from './Iconxunjia';
import IconlineError from './IconlineError';
import Icondatou from './Icondatou';
import Iconkejian from './Iconkejian';
import Iconbukejian from './Iconbukejian';
import IconlinePhoto from './IconlinePhoto';
import IconlineIncrease40 from './IconlineIncrease40';
import IconfillSelect from './IconfillSelect';
import IconlineSelect1 from './IconlineSelect1';
import IconlineDown from './IconlineDown';
import IconlineReturnCenter24 from './IconlineReturnCenter24';
import IconlineEdit from './IconlineEdit';
import IconlineDelete32 from './IconlineDelete32';
import IconlineSuccess from './IconlineSuccess';
import IconlineReturn24 from './IconlineReturn24';
import IconfillError from './IconfillError';
import IconlineAddress from './IconlineAddress';
import IconlineError32 from './IconlineError32';
import IconlineNormat40 from './IconlineNormat40';
import IconlineLogistIcs from './IconlineLogistIcs';
import IconlineReduce from './IconlineReduce';
import IconlineDisabled40 from './IconlineDisabled40';
import IconlineDoubt from './IconlineDoubt';
import IconlineWarning from './IconlineWarning';
import IconlineIncrease from './IconlineIncrease';
import IconlineScreen from './IconlineScreen';
import IconlineCenter32 from './IconlineCenter32';
import IconlineSearch from './IconlineSearch';
import IconlineReturn48 from './IconlineReturn48';
import IconarrowBottomFill from './IconarrowBottomFill';
import Iconedit from './Iconedit';
import Iconmobile from './Iconmobile';
import Icon11 from './Icon11';
import Icon3 from './Icon3';
import Icon2 from './Icon2';
import Icongongzuotainor1 from './Icongongzuotainor1';
import Iconfuliaonor from './Iconfuliaonor';
import Iconwodenor from './Iconwodenor';

export type IconNames = 'iconweihuikuan' | 'iconkehunor' | 'iconquerendan' | 'iconshezhi' | 'iconxunjia' | 'iconline-error' | 'icondatou' | 'iconkejian' | 'iconbukejian' | 'iconline-photo' | 'iconline-increase-40' | 'iconfill-select' | 'iconline-select1' | 'iconline-down' | 'iconline-return-center-24' | 'iconline-edit' | 'iconline-delete-32' | 'iconline-success' | 'iconline-return-24' | 'iconfill-error' | 'iconline-address' | 'iconline-error-32' | 'iconline-normat-40' | 'iconline-logistIcs' | 'iconline-reduce' | 'iconline-disabled-40' | 'iconline-doubt' | 'iconline-warning' | 'iconline-increase' | 'iconline-screen' | 'iconline--center-32' | 'iconline-search' | 'iconline-return-48' | 'iconarrow-bottom-fill' | 'iconedit' | 'iconmobile' | 'icon11' | 'icon3' | 'icon2' | 'icongongzuotainor1' | 'iconfuliaonor' | 'iconwodenor';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconweihuikuan':
      return <Iconweihuikuan key="1" {...rest} />;
    case 'iconkehunor':
      return <Iconkehunor key="2" {...rest} />;
    case 'iconquerendan':
      return <Iconquerendan key="3" {...rest} />;
    case 'iconshezhi':
      return <Iconshezhi key="4" {...rest} />;
    case 'iconxunjia':
      return <Iconxunjia key="5" {...rest} />;
    case 'iconline-error':
      return <IconlineError key="6" {...rest} />;
    case 'icondatou':
      return <Icondatou key="7" {...rest} />;
    case 'iconkejian':
      return <Iconkejian key="8" {...rest} />;
    case 'iconbukejian':
      return <Iconbukejian key="9" {...rest} />;
    case 'iconline-photo':
      return <IconlinePhoto key="10" {...rest} />;
    case 'iconline-increase-40':
      return <IconlineIncrease40 key="11" {...rest} />;
    case 'iconfill-select':
      return <IconfillSelect key="12" {...rest} />;
    case 'iconline-select1':
      return <IconlineSelect1 key="13" {...rest} />;
    case 'iconline-down':
      return <IconlineDown key="14" {...rest} />;
    case 'iconline-return-center-24':
      return <IconlineReturnCenter24 key="15" {...rest} />;
    case 'iconline-edit':
      return <IconlineEdit key="16" {...rest} />;
    case 'iconline-delete-32':
      return <IconlineDelete32 key="17" {...rest} />;
    case 'iconline-success':
      return <IconlineSuccess key="18" {...rest} />;
    case 'iconline-return-24':
      return <IconlineReturn24 key="19" {...rest} />;
    case 'iconfill-error':
      return <IconfillError key="20" {...rest} />;
    case 'iconline-address':
      return <IconlineAddress key="21" {...rest} />;
    case 'iconline-error-32':
      return <IconlineError32 key="22" {...rest} />;
    case 'iconline-normat-40':
      return <IconlineNormat40 key="23" {...rest} />;
    case 'iconline-logistIcs':
      return <IconlineLogistIcs key="24" {...rest} />;
    case 'iconline-reduce':
      return <IconlineReduce key="25" {...rest} />;
    case 'iconline-disabled-40':
      return <IconlineDisabled40 key="26" {...rest} />;
    case 'iconline-doubt':
      return <IconlineDoubt key="27" {...rest} />;
    case 'iconline-warning':
      return <IconlineWarning key="28" {...rest} />;
    case 'iconline-increase':
      return <IconlineIncrease key="29" {...rest} />;
    case 'iconline-screen':
      return <IconlineScreen key="30" {...rest} />;
    case 'iconline--center-32':
      return <IconlineCenter32 key="31" {...rest} />;
    case 'iconline-search':
      return <IconlineSearch key="32" {...rest} />;
    case 'iconline-return-48':
      return <IconlineReturn48 key="33" {...rest} />;
    case 'iconarrow-bottom-fill':
      return <IconarrowBottomFill key="34" {...rest} />;
    case 'iconedit':
      return <Iconedit key="35" {...rest} />;
    case 'iconmobile':
      return <Iconmobile key="36" {...rest} />;
    case 'icon11':
      return <Icon11 key="37" {...rest} />;
    case 'icon3':
      return <Icon3 key="38" {...rest} />;
    case 'icon2':
      return <Icon2 key="39" {...rest} />;
    case 'icongongzuotainor1':
      return <Icongongzuotainor1 key="40" {...rest} />;
    case 'iconfuliaonor':
      return <Iconfuliaonor key="41" {...rest} />;
    case 'iconwodenor':
      return <Iconwodenor key="42" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
