import { StyleSheet } from 'react-native';
import { $light1, $redColor, $fontColor1, $fontColor3 } from '@styles/theme';

const styles = StyleSheet.create<any>({
  cell: {
    position: 'relative',
    overflow: 'hidden',
    paddingHorizontal: 16,
    paddingVertical: 10,
    minHeight: 44,
    backgroundColor: $light1,
  },
  'cell-horizontal': {
    flexDirection: 'row',
    alignItems: 'center',
  },
  'cell-required': {
    color: $redColor,
    marginRight: 2,
  },
  'cell-left': {
    flexDirection: 'row',
    alignItems: 'center',
  },
  'cell-icon': {
    marginRight: 5,
  },
  'cell-label': {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  'cell-label-text': {
    color: $fontColor1,
    fontWeight: '500',
  },
  'cell-label-description': {
    color: $fontColor3,
  },
  'cell-right': {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  'cell-value': {
    flex: 1,
    color: $fontColor3,
    textAlign: 'right',
  },
  'cell-vertical-top': {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  'cell-vertical-label': {
    flexDirection: 'row',
    alignItems: 'center',
  },
  'cell-vertical-value': {
    color: $fontColor3,
  },
});

export default styles;
