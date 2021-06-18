import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Node from '../node';
import styles from './style';

const prefixCls = 'wheel-view';

export interface PickerViewProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  onOK?: (e: any) => void;
  onCancel?: (e: any) => void;
}

const PickerView: React.FC<PickerViewProps> = props => {
  const { title, children, onOK, onCancel } = props;
  return (
    <View style={styles[prefixCls]}>
      <View style={styles[`${prefixCls}-toolbar`]}>
        <Pressable onPress={onCancel}>
          <Text style={styles[`${prefixCls}-cancel`]}>取消</Text>
        </Pressable>
        <Node style={styles[`${prefixCls}-tittle`]}>{title}</Node>
        <Pressable onPress={onOK}>
          <Text style={styles[`${prefixCls}-confirm`]}>确定</Text>
        </Pressable>
      </View>
      <View>
        <View style={styles[`${prefixCls}-overlay`]} pointerEvents="none">
          <View style={[styles[`${prefixCls}-selected`]]} />
          <LinearGradient
            style={[styles[`${prefixCls}-mask-top`]]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['hsla(0, 0%, 100%, 0.9)', 'hsla(0, 0%, 100%, 0.4)']}
          />
          <LinearGradient
            style={[styles[`${prefixCls}-mask-bottom`]]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['hsla(0, 0%, 100%, 0.4)', 'hsla(0, 0%, 100%, 0.9)']}
          />
        </View>

        <View style={styles[`${prefixCls}-columns`]}>{children}</View>
      </View>
    </View>
  );
};

export default PickerView;
