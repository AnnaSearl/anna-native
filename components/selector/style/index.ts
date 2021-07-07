import { StyleSheet } from 'react-native';
import Theme from '../../style/theme';

const styles = StyleSheet.create<any>({
  selector: {
    flexDirection: 'row',
  },
  'selector-parent': {
    width: 140,
    backgroundColor: Theme.$light6,
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
    color: Theme.$brandColor,
    fontWeight: '500',
    backgroundColor: Theme.$lightBase,
  },
});

export default styles;
