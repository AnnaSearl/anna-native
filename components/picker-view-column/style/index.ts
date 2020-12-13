import { StyleSheet } from 'react-native';

const styles = StyleSheet.create<any>({
  'picker-view-column': {
    overflow: 'hidden',
    padding: 5,
    flex: 1,
  },
  'picker-view-column-item': {
    height: 44,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  'picker-view-column-item-text': {},
});

export default styles;
