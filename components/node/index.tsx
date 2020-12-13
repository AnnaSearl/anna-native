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

  if (typeof children === 'string' || typeof children === 'number') {
    return (
      <Text style={style} numberOfLines={numberOfLines} onLayout={onLayout}>
        {children}
      </Text>
    );
  }

  return (
    <View
      style={style}
      onLayout={onLayout}
      onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}
    >
      {children}
    </View>
  );
};

export default Node;
