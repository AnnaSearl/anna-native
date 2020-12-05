import { StyleSheet } from 'react-native';

const styles = StyleSheet.create<any>({
  'search-bar': {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  'search-bar-input': {
    maxWidth: '100%',
    height: 36,
    borderRadius: 36,
    paddingHorizontal: 10,
    // paddingVertical: 6,
    backgroundColor: '#F7F7F7',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  'search-bar-value': {
    flex: 1,
    paddingVertical: 6,
  },
  'search-bar-icon': {
    marginRight: 5,
  },
  'search-bar-action': {
    paddingLeft: 10,
    marginRight: -100,
  },
  'search-bar-action-text': {
    fontSize: 15,
  },
});

export default styles;
