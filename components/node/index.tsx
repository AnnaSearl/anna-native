import * as React from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';

export interface NodeProps {
  style?: ViewStyle | TextStyle | any[];
  numberOfLines?: number;
  children?: React.ReactNode;
  onLayout?: (e: any) => void;
  onStartShouldSetResponderCapture?: () => boolean;
}

const Node: React.FC<NodeProps> = props => {
  const { style, numberOfLines, children, onLayout, onStartShouldSetResponderCapture } = props;

  if (children === undefined || children === null) {
    return <View>{null}</View>;
  }

  if (React.isValidElement(children)) {
    return (
      <View
        style={style}
        onLayout={onLayout}
        onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}
      >
        {children}
      </View>
    );
  }

  if (Array.isArray(children)) {
    return (
      <View
        style={style}
        onLayout={onLayout}
        onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}
      >
        {children}
      </View>
    );
  }

  return (
    <Text style={style} numberOfLines={numberOfLines} onLayout={onLayout}>
      {children}
    </Text>
  );
};

export default Node;
