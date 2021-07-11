import { StyleSheet } from 'react-native';
import Theme from '../../style/theme';

export const createStylesWithTheme = (theme: AnnaNative.Theme) => {
  const { colors } = theme;
  const { primary } = colors;

  const styles = StyleSheet.create<any>({
    tabs: {
      flex: 1,
    },
    'tabs-plain': {
      backgroundColor: '#FFFFFF',
    },
    'tabs-plain-item': {
      paddingHorizontal: 16,
    },
    'tabs-plain-item-text': {
      height: 40,
      lineHeight: 40,
      textAlign: 'center',
      fontSize: 13,
      color: Theme.$fontColor3,
    },
    'tabs-plain-active': {
      position: 'absolute',
      width: 1, // 宽度设为1，scaleX 的值取 1 的倍数就可以了
      height: 2,
      left: 0,
      bottom: 0,
      backgroundColor: primary,
    },
    'tabs-container': {
      color: '#999',
      fontSize: 12,
      flex: 1,
    },
    'tabs-content-wrapper': {
      flex: 1,
      flexDirection: 'row',
    },
    'tabs-content': {
      flexShrink: 0,
      width: '100%',
    },
    'tabs-content-node': {
      flex: 1,
    },
    'tabs-content-inactive': {
      display: 'none',
    },
  });

  return styles;
};
