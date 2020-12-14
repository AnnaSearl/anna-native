import * as React from "react";
import IconFont from "../assets/iconfont";

export interface IconProps {
  name: string;
  size?: number;
  color?: string | string[];
}

export default (props: any) => {
  const { name, size, color } = props;
  return <IconFont name={name} size={size} color={color} />;
};
