import { StyleSheet } from 'react-native';

const styles = StyleSheet.create<any>({
  popup: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  'popup-contaner': {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  'popup-contaner-bottom': {
    // maxHeight: '80%',
    minHeight: 40,
    left: 0,
    right: 0,
    top: '100%',
  },
  'popup-contaner-right': {
    minWidth: 100,
    top: 0,
    bottom: 0,
    left: '100%',
  },
  'popup-close': {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  'popup-title': {
    color: '#000',
    paddingVertical: 15,
    textAlign: 'center',
  },
  'popup-content': {},
});

export default styles;
