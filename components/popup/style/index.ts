import { StyleSheet } from 'react-native';

const styles = StyleSheet.create<any>({
  popup: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  'popup-contaner': {
    position: 'absolute',
    minHeight: 40,
    backgroundColor: '#FFFFFF',
    left: 0,
    right: 0,
    top: '100%',
  },
  'popup-close': {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  'popup-title': {
    color: '#000',
    paddingVertical: 15,
    textAlign: 'center',
  },
  'popup-content': {
    overflow: 'hidden',
  },
});

export default styles;
