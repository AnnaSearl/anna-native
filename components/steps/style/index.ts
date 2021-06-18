import { StyleSheet } from 'react-native';
import { $fontColor, $fontColor2, $fontColor3, $light1, $brandColor } from '../../style/theme';

const defaultColor = '#E1E4EB';

const styles = StyleSheet.create<any>({
  steps: {
    backgroundColor: 'red',
  },
  'steps-step': {
    position: 'relative',
    minHeight: 60,
    flexDirection: 'row',
    marginBottom: 10,
  },
  'steps-step-process': {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    marginRight: 5,
  },
  'steps-step-circle': {
    width: 8,
    height: 8,
    backgroundColor: $brandColor,
    borderRadius: 8,
  },
  'steps-step-line-top': {
    position: 'absolute',
    width: 1,
    top: -10, // steps-step 的 marginBottom 的 值
    bottom: '50%',
    backgroundColor: $brandColor,
  },
  'steps-step-line-bottom': {
    position: 'absolute',
    width: 1,
    top: '50%',
    bottom: 0,
    backgroundColor: $brandColor,
  },
  'steps-step-current': {
    width: 18,
    height: 18,
    borderRadius: 18,
    backgroundColor: $light1,
  },
  'steps-step-content': {
    flexGrow: 1,
    padding: 10,
    backgroundColor: $light1,
    borderRadius: 5,
  },
  'steps-step-header': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'steps-step-title': {
    color: $fontColor,
    fontSize: 14,
    marginBottom: 5,
  },
  'steps-step-extra': {
    color: $fontColor3,
    fontSize: 12,
  },
  'steps-step-description': {
    color: $fontColor2,
    fontSize: 12,
  },
  'steps-arrow-step': {
    backgroundColor: defaultColor,
    height: 28.5,
    lineHeight: 28.5,
    textAlign: 'center',
    color: $fontColor2,
    fontSize: 13,
    marginLeft: 10,
  },
  'steps-arrow-step-active': {
    backgroundColor: $brandColor,
    color: $light1,
  },
  'steps-arrow-step-head': {
    position: 'absolute',
    right: -7,
    height: 0,
    width: 0,
    borderTopWidth: 14.25,
    borderBottomWidth: 14.25,
    borderLeftWidth: 10,
    borderColor: defaultColor,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
  },
  'steps-arrow-step-head-active': {
    borderColor: $brandColor,
  },
  'steps-arrow-step-tail': {
    position: 'absolute',
    left: 3,
    height: 0,
    width: 0,
    borderTopWidth: 14.25,
    borderBottomWidth: 14.25,
    borderLeftWidth: 10,
    borderColor: 'transparent',
    borderTopColor: defaultColor,
    borderBottomColor: defaultColor,
  },
  'steps-arrow-step-tail-active': {
    borderTopColor: $brandColor,
    borderBottomColor: $brandColor,
  },
});

export default styles;
