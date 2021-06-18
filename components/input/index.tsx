import * as React from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import styles from './style';

export interface InputProps extends TextInputProps {
  maxLength?: number;
  showCount?: boolean;
}

const Input: React.FC<InputProps> & {
  TextArea?: (p: TextAreaProps) => React.ReactElement | null;
} = props => {
  return <TextInput placeholderTextColor="#9DA1AD" {...props} />;
};

export interface TextAreaProps extends InputProps {
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = props => {
  const { value, maxLength, showCount, rows = 3 } = props;

  return (
    <View>
      <Input
        style={[styles.textArea, { minHeight: 20 * rows }]}
        multiline
        numberOfLines={rows}
        {...props}
      />
      {showCount ? (
        <Text style={styles.count}>
          {value?.length || 0}/{maxLength || 0}
        </Text>
      ) : null}
    </View>
  );
};

Input.TextArea = TextArea;

export default Input;
