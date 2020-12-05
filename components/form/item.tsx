import React, { useContext } from 'react';
import { View, ViewStyle } from 'react-native';
import { FormContext } from './context';
import styles from './style/item';

const prefixCls = 'form-item';

export interface FormProps {
  name?: string;
  rules?: any[];
  style?: ViewStyle;
  children?: React.ReactNode;
}

const FormItem: React.FC<FormProps> = (props: FormProps) => {
  const { name, rules, style, children } = props;

  const { values, errors, onChange, onChangeError }: any = useContext(FormContext);

  const handleChange = (e: any) => {
    const error = name ? errors[name] || {} : {};
    if (Array.isArray(rules) && Object.keys(error).length > 0) {
      onChangeError({}, name);
    }
    onChange?.(e, name);
  };

  const handleBlur = (e: any) => {
    const value = e.target.value;
    if (Array.isArray(rules)) {
      let errorFlag = false;
      let errorObj = {};
      for (let i = 0; i < rules.length; i += 1) {
        const rule = rules[i] || {};
        const { required, pattern, validator, message = `${name} is required` } = rule;
        if (required) {
          if (!value && value !== 0) {
            errorObj = { error: true, message };
            errorFlag = true;
            break;
          }
        }
        if (pattern) {
          const isPass = pattern.test(value);
          if (!isPass) {
            errorObj = { error: true, message };
            errorFlag = true;
            break;
          }
        }
        if (validator && typeof validator === 'function') {
          const result = validator(value);
          if (!result) {
            errorObj = { error: true, message };
            errorFlag = true;
            break;
          }
        }
      }
      if (errorFlag) {
        onChangeError(errorObj, name);
      }
      if (!errorFlag) {
        onChangeError({}, name);
      }
    }
  };

  let childrenNode = children;
  if (typeof children === 'object' && children !== null) {
    const { props: childrenProps } = children as any;
    if (childrenProps && name) {
      childrenNode = {
        ...children,
        props: {
          ...childrenProps,
          value: values[name],
          onChange: handleChange,
          onBlur: handleBlur,
        },
      };
    }
  }

  const renderErrorNode = () => {
    let height = 0;
    let errorMessage = null;

    if (name && errors[name] && errors[name].error) {
      height = 30;
      errorMessage = errors?.[name]?.message;
    }
    return <View style={[styles[`${prefixCls}-explain`], { height }]}>{errorMessage}</View>;
  };

  return (
    <View style={style}>
      {childrenNode}
      {renderErrorNode()}
    </View>
  );
};

export default FormItem;
