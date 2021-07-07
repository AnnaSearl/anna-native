import { StyleSheet } from 'react-native';
import Theme from '../../style/theme';

const styles = StyleSheet.create<any>({
  btn: {
    position: 'relative',
    paddingHorizontal: 16,
    borderRadius: 32,
    backgroundColor: Theme.$btnDefaultBg,
    overflow: 'hidden',
  },
  'btn-text': {
    height: 32,
    lineHeight: 32,
    fontSize: 13,
    textAlign: 'center',
  },
  'btn-small': {
    paddingHorizontal: 10,
    borderRadius: 29,
  },
  'btn-square': {
    borderRadius: 2,
  },
  'btn-circle': {
    paddingHorizontal: 0,
    borderRadius: '50%',
    minWidth: 32,
  },
  'btn-small-text': {
    height: 29,
    lineHeight: 29,
  },
  'btn-large': {
    paddingHorizontal: 20,
    borderRadius: 37,
  },
  'btn-large-text': {
    height: 37,
    lineHeight: 37,
    fontSize: 16,
    fontWeight: '500',
  },
  'btn-xlarge': {
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  'btn-xlarge-text': {
    height: 40,
    lineHeight: 40,
    fontSize: 16,
    fontWeight: '500',
  },
  'btn-xxlarge': {
    paddingHorizontal: 20,
    borderRadius: 44,
    // overflow: 'visible', // size 为 xxlarge 时 overflow: hidden 会阶段性 top-border,
  },
  'btn-xxlarge-text': {
    height: 44,
    lineHeight: 44,
    fontSize: 18,
    fontWeight: '600',
  },
  'btn-top-border-patch': {
    position: 'absolute',
    height: 0.5,
    backgroundColor: Theme.$brandColor,
    top: -0.5,
    left: 0,
    right: 0,
  },
  'btn-primary': {
    backgroundColor: Theme.$brandColor,
  },
  'btn-primary-text': {
    color: Theme.$light1,
  },
  'btn-plain': {
    borderColor: '#8D93A1',
    borderWidth: 0.5,
    backgroundColor: Theme.$light1,
  },
  'btn-plain-text': {
    color: Theme.$fontColor1,
  },
  'btn-plain-primary': {
    borderColor: Theme.$brandColor,
    borderWidth: 0.5,
    backgroundColor: Theme.$light1,
  },
  'btn-plain-primary-text': {
    color: Theme.$brandColor,
  },
  'btn-secondary': {
    backgroundColor: Theme.$brandSecondaryColor,
  },
  'btn-secondary-text': {
    color: Theme.$brandColor,
  },
  'btn-disabled': {
    borderColor: '#E1E2E6',
    borderWidth: 0.5,
    backgroundColor: '#E1E2E6',
  },
  'btn-disabled-text': {
    color: '#FFFFFF',
  },
});

export default styles;
