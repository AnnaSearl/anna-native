import { StyleSheet } from 'react-native';
import Theme from '../../style/theme';

export const createStylesWithTheme = (theme: AnnaNative.Theme) => {
  const { colors } = theme;
  const { primary } = colors;

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
      borderColor: Theme.$fontColor2,
      color: Theme.$fontColor2,
      lineHeight: 19,
      backgroundColor: 'transparent',
    },
    'tag-small': {
      height: 16.5,
      lineHeight: 15.5,
      paddingHorizontal: 3,
    },
    'tag-large': {},
    'tag-xlarge': {
      height: 32,
      lineHeight: 32,
    },
    'tag-primary': {
      color: '#FFFFFF',
      backgroundColor: primary,
    },
    'tag-blue': {
      color: '#1467FF',
      backgroundColor: Theme.$brandSecondaryColor,
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
      backgroundColor: '#333333',
    },
    'tag-gray': {
      color: '#9DA1AD',
      backgroundColor: '#F4F4F4',
    },
    'tag-checkable-default': {
      height: 32,
      lineHeight: 31,
      borderWidth: 0.5,
      borderColor: Theme.$light6,
      color: Theme.$fontColor,
      fontSize: 12,
      borderRadius: 4,
      paddingHorizontal: 12,
    },
    'tag-checkable-secondary': {
      height: 32,
      lineHeight: 31,
      borderWidth: 0.5,
      borderColor: primary,
      backgroundColor: primary,
      color: Theme.$lightBase,
    },
    'tag-disabled': {
      color: '#D7D8DB',
      backgroundColor: Theme.$light6,
    },
  });

  return styles;
};
