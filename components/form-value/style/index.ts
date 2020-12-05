import { StyleSheet } from 'react-native';
import { $fontColor, $fontColor3 } from '@styles/theme';

const styles = StyleSheet.create<any>({
  'form-value': {
    fontSize: 14,
    color: $fontColor,
  },
  'form-value-placeholder': {
    fontSize: 14,
    color: $fontColor3,
  },
});

export default styles;
