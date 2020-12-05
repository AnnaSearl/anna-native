import { StyleSheet } from 'react-native';
import { $brandColor, $light6, $fontColor, $brandSecondaryColor, $fontColor2 } from '@styles/theme';

const styles = StyleSheet.create<any>({
  tag: {
    position: 'relative',
    overflow: 'hidden',
    paddingHorizontal: 5,
    borderRadius: 2,
    backgroundColor: '#F6F6F6',
    height: 20,
    lineHeight: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  'tag-plain': {
    borderWidth: 0.5,
    borderColor: $fontColor2,
    color: $fontColor2,
    lineHeight: 19,
    backgroundColor: 'transparent',
  },
  'tag-small': {
    height: 16.5,
    lineHeight: 15.5,
    paddingHorizontal: 3,
  },
  'tag-large': {},
  'tag-blue': {
    color: $brandColor,
    backgroundColor: $brandSecondaryColor,
  },
  'tag-green': {
    color: '#00B94F',
    backgroundColor: '#E5F8ED',
  },
  'tag-yellow': {
    color: '#F58F00',
    backgroundColor: '#FFF0DA',
  },
  'tag-red': {
    color: '#F81A33',
    backgroundColor: 'rgba(248, 26, 51, 0.08)',
  },
  'tag-dark': {
    color: '#FFFFFF',
    backgroundColor: '#9DA1AD',
  },
  'tag-gray': {
    color: '#9DA1AD',
    backgroundColor: '#F4F4F4',
  },
  'tag-checkable-default': {
    height: 32,
    lineHeight: 31,
    borderWidth: 0.5,
    borderColor: $light6,
    color: $fontColor,
    fontSize: 12,
    borderRadius: 4,
  },
  'tag-checkable-secondary': {
    height: 32,
    lineHeight: 31,
    borderWidth: 0.5,
    borderColor: $brandColor,
    backgroundColor: $brandSecondaryColor,
    color: $brandColor,
  },
});

export default styles;
