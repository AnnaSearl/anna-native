import { StyleSheet } from 'react-native';
import { $light6, $brandColor, $lightBase } from '../../style/theme';

const styles = StyleSheet.create<any>({
  selector: {
    flexDirection: 'row',
  },
  'selector-parent': {
    width: 140,
    backgroundColor: $light6,
  },
  'selector-children': {
    flex: 1,
  },
  'selector-option': {
    height: 44,
  },
  'selector-option-text': {
    paddingLeft: 15,
    lineHeight: 44,
    fontSize: 14,
    color: '#666',
  },
  'selector-active': {
    color: $brandColor,
    fontWeight: '500',
    backgroundColor: $lightBase,
  },
});

export default styles;
