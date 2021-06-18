import * as React from 'react';
import { TextInput, View, Pressable, ViewStyle } from 'react-native';
import styles from './style';
import Icon from '../icon';

export interface InputProps {
  clearButtonMode?: string;
  clearBtnStyle?: ViewStyle;
  value?: string;
  onClear?: () => void;
  onChangeText?: (text: string) => void;
  [restProps: string]: any;
}

const Input: React.ForwardRefRenderFunction<any, InputProps> = (props, ref) => {
  const { clearButtonMode, value, clearBtnStyle } = props;

  const clearClick = () => {
    if (props.onChangeText) {
      props.onChangeText('');
    }
    if (props.onClear) {
      props.onClear();
    }
  };

  return (
    <View style={styles.content}>
      <TextInput style={styles.input} value={value} ref={ref} {...props} clearButtonMode="never" />
      {clearButtonMode && clearButtonMode !== 'never' && value && value.length > 0 ? (
        <Pressable onPress={clearClick} style={[styles.icon, clearBtnStyle]}>
          <Icon name="fill-error" size={18} color="#babec6" />
        </Pressable>
      ) : null}
    </View>
  );
};

export default React.forwardRef(Input);
