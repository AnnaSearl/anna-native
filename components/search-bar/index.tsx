import * as React from 'react';
import { View, Text, Animated, Pressable, ViewStyle } from 'react-native';
import Icon from '../icon';
import ClearInput from '../clear-input';
import Theme from '../style/theme';
import styles from './style';

const prefixCls = 'search-bar';

export interface SearchBarProps {
  value?: string;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  showActionButton?: boolean;
  placeholder?: string;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  clearButtonMode?: string;
  autoFocus?: boolean;
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
    containerStyle,
    clearButtonMode = 'while-editing',
    autoFocus,
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
    <View style={[styles[prefixCls], containerStyle]}>
      <View style={[styles[`${prefixCls}-input`], style]}>
        <View style={styles[`${prefixCls}-icon`]}>
          <Icon name="search" size={16} color="#666" />
        </View>
        <ClearInput
          style={styles[`${prefixCls}-value`]}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChangeText}
          clearButtonMode={clearButtonMode}
          onSubmitEditing={onSubmitEditing}
          value={value}
          returnKeyType={returnKeyType}
          ref={ref}
          underlineColorAndroid={'transparent'}
          placeholderTextColor={Theme.$fontColor3}
          clearBtnStyle={{ right: 20 }}
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
