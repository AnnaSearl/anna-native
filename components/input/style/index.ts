import { StyleSheet } from 'react-native';
import { $fontColor3 } from '../../style/theme';

const styles = StyleSheet.create<any>({
  textArea: {
    minHeight: 60,
  },
  count: {
    position: 'absolute',
    color: $fontColor3,
    fontSize: 12,
    lineHeight: 16.5,
    right: 0,
    bottom: 2,
  },
});

export default styles;
