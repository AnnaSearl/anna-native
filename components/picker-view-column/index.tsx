import * as React from 'react';
import { View, Pressable } from 'react-native';
import Node from '../node';
import Icon from '../icon';
import { $brandColor, $dark4 } from '@styles/theme';
import styles from './style';

const prefixCls = 'picker-view-column';

export interface OptionObjProps {
  [propName: string]: string;
}

type OptionProps = string | OptionObjProps;

export interface PickerViewColumnProps {
  value?: number;
  options?: OptionProps[];
  optionsKey?: string;
  children?: React.ReactNode;
  onChange?: (value: number) => void;
}

const PickerViewColumn: React.FC<PickerViewColumnProps> = props => {
  const { value = -1, options = [], optionsKey = 'text', onChange } = props;

  const [val, setVal] = React.useState(-1);

  React.useEffect(() => {
    setVal(value);
  }, [value]);

  const handlePress = (index: number) => {
    setVal(index);
    onChange?.(index);
  };

  return (
    <View style={styles[prefixCls]}>
      {options?.map((option, index: number) => (
        <Pressable key={index} onPress={() => handlePress(index)}>
          <View style={styles[`${prefixCls}-item`]}>
            <Node>
              {typeof option === 'object' ? (option as OptionObjProps)?.[optionsKey] : option}
            </Node>
            <View>
              {val === index ? (
                <Icon name="fill-select" size={18} color={$brandColor} />
              ) : (
                <Icon name="line-normat-40" size={18} color={$dark4} />
              )}
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default PickerViewColumn;
