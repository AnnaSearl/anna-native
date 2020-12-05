import * as React from 'react';
import IconFont from '../../../assets/iconfont';

export interface IconProps {
  name: string;
  type: string;
  size?: number;
  color?: string | string[];
}

export default (props: any) => {
  const { name, type, size, color } = props;
  return <IconFont name={name || type} size={size} color={color} />;
};
