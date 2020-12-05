import { StyleSheet } from 'react-native';
import { $light5, $gray4 } from '@styles/theme';

const styles = StyleSheet.create<any>({
  'image-picker': {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  'image-picker-file': {
    position: 'relative',
    marginRight: 10,
    marginBottom: 10,
  },
  'image-picker-delete': {
    position: 'absolute',
    top: 2.5,
    right: 2.5,
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: 'rgba(153, 153, 153, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'image-picker-image': {
    height: 85,
    width: 85,
    backgroundColor: $gray4,
    borderRadius: 5,
  },
  'image-picker-btn': {
    height: 85,
    width: 85,
    backgroundColor: $light5,
    borderRadius: 5,
  },
  'image-picker-text': {
    lineHeight: 85,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '200',
    color: '#BABEC6',
  },
});

export default styles;
