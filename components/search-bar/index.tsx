import * as React from 'react';
import { View, TextInput, Text, Animated, Pressable, ViewStyle } from 'react-native';
import Icon from '../icon';
import { $fontColor3 } from '@styles/theme';
import styles from './style';

const prefixCls = 'search-bar';

export interface SearchBarProps {
  value?: string;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  showActionButton?: boolean;
  placeholder?: string;
  style?: ViewStyle;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onActionPress?: () => void;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: (e: any) => void;
}

const SearchBar: React.ForwardRefRenderFunction<any, SearchBarProps> = (props, ref) => {
  const {
    value,
    returnKeyType,
    showActionButton,
    placeholder,
    style,
    onFocus,
    onBlur,
    onActionPress,
    onChangeText,
    onSubmitEditing,
  } = props;

  const marginRightAnim = React.useRef(new Animated.Value(-100)).current;

  React.useEffect(() => {
    if (showActionButton) {
      Animated.timing(marginRightAnim, {
        toValue: 10,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(marginRightAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [showActionButton]);

  return (
    <View style={styles[prefixCls]}>
      <View style={[styles[`${prefixCls}-input`], style]}>
        <View style={styles[`${prefixCls}-icon`]}>
          <Icon name="line-search" size={16} color="#666" />
        </View>
        <TextInput
          style={styles[`${prefixCls}-value`]}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          value={value}
          returnKeyType={returnKeyType}
          ref={ref}
          underlineColorAndroid={'transparent'}
          placeholderTextColor={$fontColor3}
        />
      </View>

      <Pressable onPress={onActionPress}>
        <Animated.View style={[styles[`${prefixCls}-action`], { marginRight: marginRightAnim }]}>
          <Text style={styles[`${prefixCls}-action-text`]}>取消</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default React.forwardRef(SearchBar);
