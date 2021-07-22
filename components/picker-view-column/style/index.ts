import { StyleSheet } from 'react-native';

const styles = StyleSheet.create<any>({
  'picker-view-column': {
    flex: 1,
  },
  'picker-view-column-content': {
    transform: [{ translateY: 88 }],
  },
  'picker-view-column-item': {
    height: 44,
  },
  'picker-view-column-item-text': {
    color: '#000',
    lineHeight: 44,
    textAlign: 'center',
  },
});

export default styles;
