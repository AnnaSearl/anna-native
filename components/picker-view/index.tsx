import * as React from 'react';
import { View, Text, Pressable, ScrollView, ViewStyle } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'picker-view';

export interface PickerViewProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  onOK?: (e: any) => void;
  onCancel?: (e: any) => void;
  contentStyle?: ViewStyle | null;
}

const PickerView: React.FC<PickerViewProps> = props => {
  const { title, contentStyle, children, onOK, onCancel } = props;
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
      {/* 这里要对 ScrollView 设置 style 而不是 contentContainerStyle */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles[`${prefixCls}-container`]}>
        <Node style={[styles[`${prefixCls}-columns`], contentStyle]}>{children}</Node>
      </ScrollView>
    </View>
  );
};

export default PickerView;
