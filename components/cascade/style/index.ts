import { StyleSheet } from 'react-native';
import Theme from '../../style/theme';

const stepHeight = 50;

const styles = StyleSheet.create<any>({
  cascade: {
    textAlign: 'left',
    backgroundColor: Theme.$light4,
  },
  'cascade-selected': {
    minHeight: 45,
    backgroundColor: Theme.$lightBase,
    paddingVertical: 12,
  },
  'cascade-step': {
    position: 'relative',
    height: stepHeight,
    paddingLeft: 44,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  'cascade-step-text': {
    lineHeight: stepHeight,
    color: Theme.$dark2,
    fontSize: 15,
  },
  'cascade-step-dot': {
    position: 'absolute',
    width: 9,
    height: 9,
    borderRadius: 9,
    bottom: '50%',
    left: 15,
    marginBottom: -4.5,
    backgroundColor: Theme.$brandColor,
  },
  'cascade-step-line': {
    position: 'absolute',
    bottom: '50%',
    left: 15 + 4,
    width: 1,
    height: stepHeight,
    backgroundColor: Theme.$brandColor,
  },
  'cascade-step-right': {
    flexDirection: 'row',
    alignItems: 'center',
  },
  'cascade-step-prompt': {
    paddingRight: 5,
  },
  'cascade-step-prompt-text': {
    color: Theme.$dark4,
    fontSize: 15,
  },
  'cascade-options': {
    minHeight: 100,
    paddingHorizontal: 15,
  },
  'cascade-title': {
    paddingTop: 15,
    paddingBottom: 5,
  },
  'cascade-title-text': {
    fontSize: 12,
    color: Theme.$dark3,
  },
  'cascade-option': {
    paddingVertical: 15,
  },
  'cascade-option-text': {
    color: Theme.$dark2,
    fontSize: 15,
  },
});

export default styles;
