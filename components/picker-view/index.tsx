import * as React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'picker-view';

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
      <ScrollView style={styles[`${prefixCls}-columns`]}>
        <Node>{children}</Node>
      </ScrollView>
    </View>
  );
};

export default PickerView;
