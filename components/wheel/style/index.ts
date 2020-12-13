import { StyleSheet } from 'react-native';

const styles = StyleSheet.create<any>({
  wheel: {
    flex: 1,
  },
  'wheel-content': {
    transform: [{ translateY: 88 }],
  },
  'wheel-item': {
    height: 44,
  },
  'wheel-item-text': {
    color: '#000',
    lineHeight: 44,
    textAlign: 'center',
  },
});

export default styles;
