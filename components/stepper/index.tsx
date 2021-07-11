import * as React from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { IMAGE_HOST } from '../_constants';
import styles from './style';

export interface StepperProps {
  value?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  onChange?: Function;
  style?: React.CSSProperties;
}

const Stepper: React.FC<StepperProps> = props => {
  const { min = 1, value = min, max, onChange, disabled = false } = props;

  const [current, setCurrent] = React.useState(value);

  React.useEffect(() => {
    if (current === value) {
      return;
    }
    if (onChange) {
      onChange(current);
    }
  }, [current]);

  React.useEffect(() => {
    if (current === value) {
      return;
    }
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
    if (current < min) {
      setCurrent(min);
    } else if (max && current > max) {
      setCurrent(max);
    }
    if (onChange) {
      onChange(current);
    }
  };

  return (
    <View style={styles.content}>
      {current <= min || disabled ? (
        <TouchableOpacity
          onPress={() => {
            console.log('不能减少呐');
          }}
        >
          <Image
            style={styles.rocketImg}
            source={{
              uri: `${IMAGE_HOST}reduce_dis.png`,
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPressReduce}>
          <Image
            style={styles.rocketImg}
            source={{
              uri: `${IMAGE_HOST}reduce_nor.png`,
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
        onChangeText={text => onChangeText(Number(text.replace(/[^\d]+/, '')))}
      />
      {(max && current >= max) || disabled ? (
        <Image
          style={styles.rocketImg}
          source={{
            uri: `${IMAGE_HOST}add_dis.png`,
          }}
        />
      ) : (
        <TouchableOpacity onPress={onPressAdd}>
          <Image
            style={styles.rocketImg}
            source={{
              uri: `${IMAGE_HOST}add_nor.png`,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Stepper;
