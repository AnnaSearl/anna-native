import * as React from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import styles from './style';

export interface InputProps {
  maxLength?: number;
  showCount?: boolean;
}

const Input: React.FC<TextInputProps & InputProps> & {
  TextArea?: (p: TextInputProps) => React.ReactElement | null;
} = props => {
  return <TextInput placeholderTextColor="#9DA1AD" {...props} />;
};

const TextArea: React.FC<TextInputProps & InputProps> = props => {
  const { value, maxLength, showCount } = props;

  return (
    <View>
      <Input style={styles.textArea} multiline numberOfLines={3} {...props} />
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
