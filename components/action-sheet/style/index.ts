import { StyleSheet } from 'react-native';
import { $light4, $light5, $light1, $dangerColor } from '@styles/theme';

const styles = StyleSheet.create<any>({
  'action-sheet': {
    position: 'relative',
    overflow: 'hidden',
  },
  'action-sheet-container': {
    marginTop: 0,
    marginBottom: 8,
    marginHorizontal: 12,
    borderRadius: 16,
    overflow: 'hidden',
  },
  'action-sheet-cover': {
    marginBottom: 0,
    marginHorizontal: 0,
    borderRadius: 0,
  },
  'action-sheet-menu': {
    paddingBottom: 8,
    backgroundColor: $light5,
  },
  'action-sheet-action': {
    position: 'relative',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  'action-sheet-action-text': {
    height: 56,
    lineHeight: 56,
    textAlign: 'center',
    backgroundColor: $light1,
    fontSize: 17,
  },
  'action-sheet-action-destructive': {
    color: $dangerColor,
  },
  'action-sheet-grid': {
    position: 'relative',
    backgroundColor: $light1,
  },
  'action-sheet-grid-wrapper': {
    display: 'flex',
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  'action-sheet-grid-item': {
    position: 'relative',
    width: 53,
    maxWidth: 53,
    marginRight: 18,
  },
  'action-sheet-grid-item-icon': {
    justifyContent: 'center',
    alignItems: 'center',
    height: 53,
    width: 53,
    borderRadius: 8,
    backgroundColor: $light4,
    overflow: 'hidden',
    fontWeight: '500',
    fontSize: 16,
  },
  'action-sheet-grid-item-name': {
    marginTop: 8,
    fontSize: 12,
  },
  'action-sheet-title': {
    fontSize: 12,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  'action-sheet-cancel': {
    height: 56,
    lineHeight: 56,
    textAlign: 'center',
    backgroundColor: $light1,
    fontSize: 17,
  },
});

export default styles;
