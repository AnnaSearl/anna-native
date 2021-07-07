import { StyleSheet } from 'react-native';
import Theme from '../../style/theme';

const styles = StyleSheet.create<any>({
  'text-item': {
    marginBottom: 10,
  },
  'text-item-horizontal': {
    flexDirection: 'row',
    alignItems: 'center',
  },
  'text-item-left': {
    marginRight: 20,
  },
  'text-item-label': {
    fontSize: 13,
    color: Theme.$fontColor2,
    lineHeight: 18.5,
  },
  'text-item-description': {
    fontSize: 13,
    color: Theme.$fontColor3,
    lineHeight: 18.5,
  },
  'text-item-value': {
    fontSize: 13,
    color: Theme.$fontColor,
    lineHeight: 18.5,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    textAlign: 'right',
  },
  'text-item-value-end': {
    alignItems: 'flex-end',
  },
  'text-item-vertical-label': {
    marginBottom: 10,
  },
});

export default styles;
