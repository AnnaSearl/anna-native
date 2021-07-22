import { StyleSheet } from 'react-native';

const rowHeight = 44;

export const createStylesWithTheme = (theme: AnnaNative.Theme) => {
  const { colors } = theme;
  const { primary } = colors;

  const styles = StyleSheet.create<any>({
    'picker-view': {},
    'picker-view-toolbar': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    'picker-view-cancel': {
      paddingHorizontal: 12,
      color: '#999',
      height: rowHeight,
      lineHeight: rowHeight,
      fontWeight: '500',
    },
    'picker-view-title': {
      color: '#333',
      fontWeight: '500',
      height: rowHeight,
      lineHeight: rowHeight,
    },
    'picker-view-confirm': {
      paddingHorizontal: 12,
      color: primary,
      height: rowHeight,
      lineHeight: rowHeight,
      fontWeight: '500',
    },
    'picker-view-columns': {
      height: rowHeight * 5,
      flexDirection: 'row',
      overflow: 'hidden',
    },
    'picker-view-overlay': {
      zIndex: 1,
    },
    'picker-view-selected': {
      position: 'absolute',
      left: 0,
      top: rowHeight * 2,
      width: '100%',
      height: rowHeight,
      backgroundColor: 'rgba(102, 204, 255, 0.08)',
    },
    'picker-view-mask-top': {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: rowHeight * 2,
    },
    'picker-view-mask-bottom': {
      position: 'absolute',
      left: 0,
      top: rowHeight * 3,
      width: '100%',
      height: rowHeight * 2,
    },
  });

  return styles;
};
