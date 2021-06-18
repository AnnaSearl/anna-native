import * as React from 'react';
import { View, SafeAreaView, ViewProps, ViewStyle, StyleSheet } from 'react-native';
import SafeFilling from '../safe-filling';

export interface SafeAreaProps extends ViewProps {
  topColor?: string;
  bottomColor?: string;
  topInset?: boolean;
  bottomInset?: boolean;
  topStyle?: ViewStyle;
  bottomStyle?: ViewStyle;
  native?: boolean;
  style?: ViewStyle;
  children?: React.ReactNode;
}

const SafeArea: React.FC<SafeAreaProps> = props => {
  const {
    topColor,
    bottomColor,
    topInset = true,
    bottomInset,
    topStyle,
    bottomStyle,
    native,
    style,
    children,
    ...restProps
  } = props;
  return native ? (
    <SafeAreaView {...props}>{children}</SafeAreaView>
  ) : (
    <View style={[styles.container, style]} {...restProps}>
      {topInset ? <SafeFilling style={topStyle} backgroundColor={topColor || '#FFFFFF'} /> : null}
      {children}
      {bottomInset ? (
        <SafeFilling bottom style={bottomStyle} backgroundColor={bottomColor || '#FFFFFF'} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SafeArea;
