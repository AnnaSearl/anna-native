import React, { useRef, useState, useEffect } from 'react';
import { View, ScrollView, Text, Pressable, ViewStyle } from 'react-native';
import Icon from '../icon';
import SafeFilling from '../safe-filling';
import { withTheme } from '../theme';
import { createStylesWithTheme } from './style';
import Theme from '../style/theme';

const prefixCls = 'cascade';

const getMatchLevelOptions = (value: valueType, level: number, data: OptionProps[]): any => {
  let r = null;
  const currentLevel = level - 1;
  for (let i = 0; i < data.length; i += 1) {
    const item = data[i];
    if (currentLevel === 0) {
      if (value === item.value) {
        r = data;
      }
    }
    if (currentLevel > 0) {
      if (item.children) {
        r = getMatchLevelOptions(value, currentLevel, item.children);
      }
    }
    if (r) {
      return r;
    }
  }
  return r;
};

const getSelectedOptions = (value: valueType[], options: OptionProps[]) => {
  if (!Array.isArray(value) || !Array.isArray(options)) {
    return [];
  }
  let level = 0;
  const selectedOptions: any[] = [];
  const recursion = (levelOptions: OptionProps[]): any => {
    for (let i = 0; i < levelOptions.length; i += 1) {
      const option = levelOptions[i];
      if (option.value === value[level]) {
        selectedOptions.push(option);
        level += 1;
        if (selectedOptions.length === value.length) {
          return selectedOptions;
        } else if (selectedOptions.length < value.length) {
          return recursion(option.children || []);
        }
      }
    }
    return selectedOptions;
  };

  return recursion(options);
};

export type valueType = string | number;

export interface OptionProps {
  value: valueType;
  text: React.ReactNode;
  children?: OptionProps[];
}

export interface CascadeProps {
  name?: string;
  value?: valueType[];
  options?: OptionProps[];
  changeOnSelect?: boolean;
  height?: string;
  theme: AnnaNative.Theme;
  style?: ViewStyle;
  prompt?: (e: any) => string;
  onChange: (v: valueType[], selectedOptions?: OptionProps[], isLast?: boolean) => void;
}

const Cascade: React.FC<CascadeProps> = props => {
  const {
    name,
    value = [],
    options = [],
    changeOnSelect,
    height = 550,
    style,
    theme,
    prompt,
    onChange,
  } = props;

  const [levelOptions, setLevelOptions] = useState(options);
  // @ts-ignore
  const [scrollTop, setScrollTop] = useState(0);
  const [localValue, setLocalValue] = useState<valueType[]>(value || []);

  const rechoose = useRef(false);

  const val = changeOnSelect ? value : localValue;

  const selectedOptions = getSelectedOptions(val, options);

  useEffect(() => {
    // 修复有默认值时，城市选项(即levelOptions) 永远处于省级的问题
    // 第一次进入时如果有默认值，则通过默认值获取 levelOptions
    if (selectedOptions?.length) {
      const opt = selectedOptions?.[selectedOptions?.length - 1];
      const matchedOptions = getMatchLevelOptions(opt?.value, selectedOptions?.length, options);
      setLevelOptions(matchedOptions);
    }
  }, []);

  // useEffect(() => {
  //   if (options && options.length > 0) {
  //     setLevelOptions(options);
  //   }
  // }, [options]) // 无法使用此 useEffect，使用后会报错。

  const handleClick = async (i: any) => {
    let nextValue = [];
    let nextSelectedOption = [];
    const lastIndex = val.length - 1;
    const lastSelectedOption = selectedOptions[lastIndex] || {};

    if (
      val.length > 0 &&
      (!lastSelectedOption.children || lastSelectedOption.children.length === 0)
    ) {
      nextValue = [...val.slice(0, lastIndex), i.value];
      nextSelectedOption = [...selectedOptions.slice(0, lastIndex), i];
    } else if (val.length > 0 && rechoose.current) {
      nextValue = [...val.slice(0, lastIndex), i.value];
      nextSelectedOption = [...selectedOptions.slice(0, lastIndex), i];
    } else {
      nextValue = [...val, i.value];
      nextSelectedOption = [...selectedOptions, i];
    }
    if (changeOnSelect) {
      let isLast = false;
      if (!Array.isArray(i.children) || i.children.length === 0) {
        isLast = true;
      }
      onChange?.(nextValue, nextSelectedOption, isLast);
    }
    if (!changeOnSelect) {
      if (!Array.isArray(i.children) || i.children.length === 0) {
        setLocalValue(nextValue);
        onChange?.(nextValue, nextSelectedOption, true);
      } else {
        setLocalValue(nextValue);
      }
    }

    rechoose.current = false;

    setScrollTop(top => {
      return top === 0 ? 1 : 0;
    });
    if (Array.isArray(i.children) && i.children.length > 0) {
      setLevelOptions(i.children);
    }
  };

  const handleReChoose = (item: any, index: number) => {
    rechoose.current = true;
    if (changeOnSelect) {
      onChange?.(val.slice(0, index + 1));
    }
    if (!changeOnSelect) {
      setLocalValue(val.slice(0, index + 1));
    }
    setLevelOptions(getMatchLevelOptions(item.value, index + 1, options));
    setScrollTop(top => {
      return top === 0 ? 1 : 0;
    });
  };

  const styles = createStylesWithTheme(theme);

  return (
    <View
      style={[
        styles[prefixCls],
        {
          height,
        },
        style,
      ]}
    >
      <View style={styles[`${prefixCls}-selected`]}>
        {selectedOptions.map((item: OptionProps, index: number) => (
          <Pressable
            key={item.value}
            style={styles[`${prefixCls}-step`]}
            onPress={() => {
              handleReChoose(item, index);
            }}
          >
            <Text style={styles[`${prefixCls}-step-text`]}>{item.text}</Text>
            <View style={styles[`${prefixCls}-step-dot`]} />
            {index === 0 ? null : <View style={styles[`${prefixCls}-step-line`]} />}

            <View style={styles[`${prefixCls}-step-right`]}>
              <View style={styles[`${prefixCls}-step-prompt`]}>
                <Text style={styles[`${prefixCls}-step-prompt-text`]}>{prompt?.(index)}</Text>
              </View>
              <Icon name="line-return-cente-24" size={12} color={Theme.$dark4} />
            </View>
          </Pressable>
        ))}
      </View>
      <ScrollView style={styles[`${prefixCls}-options`]}>
        <View style={styles[`${prefixCls}-title`]}>
          <Text style={styles[`${prefixCls}-title-text`]}>{`选择${name}`}</Text>
        </View>
        {levelOptions?.map(i => (
          <Pressable
            key={i.value}
            style={styles[`${prefixCls}-option`]}
            onPress={() => {
              handleClick(i);
            }}
          >
            <Text style={styles[`${prefixCls}-option-text`]}>{i.text}</Text>
          </Pressable>
        ))}
        <SafeFilling bottom />
      </ScrollView>
    </View>
  );
};

export default withTheme(Cascade);
