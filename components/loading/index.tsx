import * as React from 'react';
import { View, ViewStyle, TextStyle, ActivityIndicator, Modal } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'loading';

export interface LoadingProps {
  look?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  plain?: boolean;
  color?: string;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  children?: React.ReactNode;
  onPress: (e: any) => void;
}

const Loading: React.FC<LoadingProps> = props => {
  const { color, children, style, textStyle } = props;

  return (
    <Modal animationType="fade" transparent={true} visible={true} onRequestClose={() => {}}>
      <View style={styles[`${prefixCls}-container`]}>
        <View style={[styles[`${prefixCls}-box`], style]}>
          <ActivityIndicator
            style={styles[`${prefixCls}`]}
            size="large"
            color={color || '#FFFFFF'}
            animating={true}
          />
          <Node style={[styles[`${prefixCls}-text`], textStyle, { color }]}>{children}</Node>
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
