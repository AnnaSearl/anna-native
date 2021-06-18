import React, { useState, useEffect } from 'react';
import { View, Pressable } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'selector';

export interface OptionProps {
  value: string | number;
  text: string;
  children?: OptionProps[];
}

export interface SelectorProps {
  options?: OptionProps[];
  value?: string[];
  style?: React.CSSProperties;
  onChange?: (value: any, valueStr?: string) => void;
  onChangeParentOption?: (e: any) => void;
  [key: string]: any;
}

let currentParent: any = null;

const Selector = (props: SelectorProps) => {
  const { value = [], options = [], style, onChange, onChangeParentOption } = props;

  const [parentData, setParentData] = useState<OptionProps[]>([]);
  const [childrenData, setChildrenData] = useState<OptionProps[]>([]);
  const [activeParent, setActiveParent] = useState<string | number>('');

  useEffect(() => {
    if (options.length > 0) {
      const data = options[0].children || [];
      currentParent = options[0];
      setActiveParent(currentParent.value);
      setParentData(options);
      setChildrenData(data);
    }
  }, [options]);

  const handleClickParentOption = (option: OptionProps) => {
    const data = option.children || [];
    currentParent = option;
    setChildrenData(data);
    setActiveParent(option.value);
    onChangeParentOption?.(option);
  };

  const handleClickChildrenOption = (option: OptionProps) => {
    onChange?.([currentParent.value, option.value], `${currentParent.text} ${option.text}`);
  };

  return (
    <View style={[styles[prefixCls], style]}>
      <View style={styles[`${prefixCls}-parent`]}>
        {parentData?.map((option, index) => (
          <Pressable
            key={option.value}
            style={styles[`${prefixCls}-option`]}
            onPress={() => {
              handleClickParentOption(option);
            }}
          >
            <Node
              style={[
                styles[`${prefixCls}-option-text`],
                activeParent === option.value ? styles[`${prefixCls}-active`] : null,
              ]}
            >
              {option.text}
            </Node>
            {activeParent === option.value && index !== 0 ? (
              <View style={styles[`${prefixCls}-option-rounded_top`]}>
                <View style={styles[`${prefixCls}-option-rounded_top-circle`]} />
              </View>
            ) : null}
            {activeParent === option.value ? (
              <View style={styles[`${prefixCls}-option-rounded_bottom`]}>
                <View style={styles[`${prefixCls}-option-rounded_bottom-circle`]} />
              </View>
            ) : null}
          </Pressable>
        ))}
      </View>
      <View style={styles[`${prefixCls}-children`]}>
        {childrenData?.map(option => (
          <Pressable
            key={option.value}
            style={styles[`${prefixCls}-option`]}
            onPress={() => {
              handleClickChildrenOption(option);
            }}
          >
            <Node
              style={[
                styles[`${prefixCls}-option-text`],
                value?.[1] === option.value ? styles[`${prefixCls}-active`] : null,
              ]}
            >
              {option.text}
            </Node>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Selector;
