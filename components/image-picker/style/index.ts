import { StyleSheet } from 'react-native';
import Theme from '../../style/theme';

const styles = StyleSheet.create<any>({
  'image-picker': {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  'image-picker-file': {
    position: 'relative',
    marginRight: 10,
    // marginBottom: 10,
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
    backgroundColor: Theme.$gray4,
    borderRadius: 5,
  },
  'image-picker-add': {
    height: 85,
    width: 85,
    backgroundColor: Theme.$light5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  'image-picker-add-icon': {
    marginBottom: 5,
  },
  'image-picker-add-text': {
    textAlign: 'center',
    lineHeight: 16.5,
    fontSize: 12,
    color: Theme.$fontColor3,
  },
});

export default styles;
