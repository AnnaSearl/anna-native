import { StyleSheet } from 'react-native';
import { $brandColor, $fontColor3 } from '../../style/theme';

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
    fontSize: 13,
    color: $fontColor3,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
  },
  'tabs-plain-active': {
    position: 'absolute',
    width: 1, // 宽度设为1，scaleX 的值取 1 的倍数就可以了
    height: 2,
    left: 0,
    bottom: 0,
    backgroundColor: $brandColor,
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

export default styles;
