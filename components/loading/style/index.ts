import { StyleSheet } from 'react-native';

const styles = StyleSheet.create<any>({
  'loading-container': {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  'loading-box': {
    width: 100,
    height: 100,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  loading: {
    width: 50,
    height: 50,
  },
  'loading-text': {
    color: '#FFFFFF',
  },
});

export default styles;
