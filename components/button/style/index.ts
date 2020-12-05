import { StyleSheet } from 'react-native';
import {
  $btnDefaultBg,
  $brandColor,
  $brandSecondaryColor,
  $light1,
  $fontColor1,
} from '@styles/theme';

const styles = StyleSheet.create<any>({
  btn: {
    position: 'relative',
    paddingHorizontal: 10,
    borderRadius: 32,
    backgroundColor: $btnDefaultBg,
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
  'btn-superlarge': {
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  'btn-superlarge-text': {
    height: 40,
    lineHeight: 40,
    fontSize: 16,
    fontWeight: '500',
  },
  'btn-primary': {
    backgroundColor: $brandColor,
  },
  'btn-primary-text': {
    color: $light1,
  },
  'btn-plain': {
    borderColor: '#8D93A1',
    borderWidth: 0.5,
    backgroundColor: $light1,
  },
  'btn-plain-text': {
    color: $fontColor1,
  },
  'btn-plain-primary': {
    borderColor: $brandColor,
    borderWidth: 0.5,
    backgroundColor: $light1,
  },
  'btn-plain-primary-text': {
    color: $brandColor,
  },
  'btn-secondary': {
    backgroundColor: $brandSecondaryColor,
  },
  'btn-secondary-text': {
    color: $brandColor,
  },
});

export default styles;
