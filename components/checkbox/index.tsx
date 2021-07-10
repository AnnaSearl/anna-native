import * as React from 'react';
import { View, Pressable, ViewStyle } from 'react-native';
import Icon from '../icon';
import { withTheme } from '../theme';
import styles from './style';

const prefixCls = 'checkbox';

type CheckboxValue = string | number;

export interface CheckboxProps {
  theme: AnnaNative.Theme;
  checked?: boolean;
  value?: CheckboxValue;
  style?: ViewStyle;
  checkboxStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  disabled?: boolean;
  onPress?: (e: any) => void;
  onChange?: (checked: boolean, e?: any, v?: CheckboxValue) => void;
}

const Checkbox: React.FC<CheckboxProps> & {
  Group?: React.FC<GroupProps>;
} = props => {
  const {
    theme,
    checked,
    value,
    children,
    style,
    checkboxStyle,
    contentStyle,
    disabled,
    onPress,
    onChange,
  } = props;

  const { colors } = theme;
  const { primary } = colors;

  const handleChange = (e: any) => {
    if (disabled) {
      return;
    }
    onChange?.(!checked, e, value);
  };

  let currentIcon: React.ReactNode;
  if (disabled) {
    currentIcon = <Icon name="disabled" size={20} color="#9DA1AD" />;
  } else {
    currentIcon = checked ? (
      <Icon name="selected" size={20} color={[primary, '#FFFFFF']} />
    ) : (
      <View style={styles[`${prefixCls}-unchecked`]} />
    );
  }

  return (
    <Pressable style={[styles[prefixCls], style]} onPress={onPress}>
      <Pressable style={[styles[`${prefixCls}-icon`], checkboxStyle]} onPress={handleChange}>
        {currentIcon}
      </Pressable>
      <Pressable style={[styles[`${prefixCls}-content`], contentStyle]} onPress={onPress}>
        {children}
      </Pressable>
    </Pressable>
  );
};

const getCheckboxs = (
  children: React.ReactNode,
  value: CheckboxValue[] = [],
  onChange?: (v?: CheckboxValue[], e?: any) => void,
) => {
  const onGroupChange = (checked: any, e: any, v: CheckboxValue) => {
    const val: any[] = value || [];
    const newVal = val?.includes(v) ? val?.filter(i => i !== v) : val?.concat(v);
    const newValue = !Array.isArray(newVal) || newVal.length === 0 ? undefined : newVal;
    onChange?.(newValue, e);
  };
  const checkboxs = React.Children.map(children, (checkbox: any) => {
    const p = checkbox?.props || {};
    let checked = p.checked;
    if ((p.value || p.value === 0) && (value as CheckboxValue[])?.includes?.(p.value)) {
      checked = !checked;
    }
    return {
      ...checkbox,
      props: {
        ...checkbox.props,
        checked,
        onChange: onGroupChange,
      },
    };
  });

  return checkboxs;
};

export interface GroupProps {
  value?: CheckboxValue[];
  children?: React.ReactNode;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  onChange?: (v?: CheckboxValue[]) => void;
}

const Group: React.FC<GroupProps> = props => {
  const { value = [], children, direction = 'row', onChange } = props;

  const checkboxs = getCheckboxs(children, value, onChange);

  return <View style={{ flexDirection: direction }}>{checkboxs}</View>;
};

const CheckboxWithTheme = withTheme(Checkbox);
//@ts-ignore
CheckboxWithTheme.Group = withTheme(Group);

export default CheckboxWithTheme;
