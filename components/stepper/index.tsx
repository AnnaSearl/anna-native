import * as React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { WToast as Toast } from 'react-native-smart-tip';
import styles from './style';
import { getImageHost } from '@utils';

export interface TagProps {
  value: number;
  min: number;
  max: number;
  disabled: boolean;
  onChange: Function;
  style?: React.CSSProperties;
}

const Stepper = (props: TagProps) => {
  const { value, min = 1, max, onChange, disabled = false } = props;

  const [current, setCurrent] = React.useState(value);

  React.useEffect(() => {
    if (current === value) return;
    if (onChange) onChange(current);
  }, [current]);

  React.useEffect(() => {
    if (current === value) return;
    setCurrent(value);
  }, [value]);

  const onPressAdd = () => {
    var a = current;
    a++;
    setCurrent(a);
  };

  const onPressReduce = () => {
    var a = current;
    a--;
    setCurrent(a);
  };

  const onChangeText = (v: number) => {
    setCurrent(v);
  };

  const onSubText = () => {
    if (current < min) setCurrent(min);
    else if (current > max) setCurrent(max);
  };

  return (
    <View style={styles.content}>
      {current === min || disabled ? (
        <TouchableOpacity
          onPress={() => {
            Toast.show({
              data: '不能再减少啦',
              position: Toast.position.CENTER,
            });
          }}
        >
          <Image
            style={styles.rocketImg}
            source={{
              uri: `${getImageHost()}reduce_dis.png`,
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPressReduce}>
          <Image
            style={styles.rocketImg}
            source={{
              uri: `${getImageHost()}reduce_nor.png`,
            }}
          />
        </TouchableOpacity>
      )}
      <TextInput
        returnKeyType={'done'}
        value={current + ''}
        editable={!disabled}
        keyboardType={'numeric'}
        style={styles.input}
        underlineColorAndroid={'transparent'}
        onBlur={onSubText}
        onSubmitEditing={onSubText}
        onChangeText={text => onChangeText(Number(text))}
      ></TextInput>
      {current === max || disabled ? (
        <Image
          style={styles.rocketImg}
          source={{
            uri: `${getImageHost()}add_dis.png`,
          }}
        />
      ) : (
        <TouchableOpacity onPress={onPressAdd}>
          <Image
            style={styles.rocketImg}
            source={{
              uri: `${getImageHost()}add_nor.png`,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Stepper;
