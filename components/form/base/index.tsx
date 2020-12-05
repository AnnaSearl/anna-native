import * as React from 'react';
import { View } from 'react-native';

export interface BaseFormProps {
  children?: React.ReactNode;
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
}

const BaseForm: React.FC<BaseFormProps> = props => {
  const { children, onSubmit } = props;

  const childrenArray = React.Children.toArray(children);
  childrenArray.forEach((child: any) => {
    if (child?.props?.nativeType && child?.props?.nativeType === 'submit') {
      child.props = { ...child.props, onPress: (e: any) => onSubmit?.(e) };
    }
  });

  return <View>{childrenArray}</View>;
};

export default BaseForm;
