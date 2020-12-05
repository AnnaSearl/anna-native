import { StyleSheet } from 'react-native';
import { $fontColor3 } from '@styles/theme';

const styles = StyleSheet.create<any>({
  textArea: {
    height: 61,
  },
  count: {
    position: 'absolute',
    color: $fontColor3,
    fontSize: 12,
    lineHeight: 16.5,
    right: 0,
    bottom: 0,
  },
});

export default styles;
