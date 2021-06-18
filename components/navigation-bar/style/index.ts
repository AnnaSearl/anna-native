import { StyleSheet, Platform } from 'react-native';
import { isIPhoneX } from '../../_util';
import { NAV_BAR_HEIGHT_IOS, NAV_BAR_HEIGHT_ANDROID, STATUS_BAR_HEIGHT } from '../../_constants';
import { $fontColor } from '../../style/theme';

const NAV_BAR_HEIGHT = Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID; // 导航栏的高度
const TOP_STATUS_BAR_HEIGHT = Platform.OS !== 'ios' || isIPhoneX() ? 0 : STATUS_BAR_HEIGHT; // 状态栏的高度

const styles = StyleSheet.create<any>({
  'navigation-bar': {},
  'navigation-bar-status': {
    height: TOP_STATUS_BAR_HEIGHT,
  },
  'navigation-bar-content': {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: NAV_BAR_HEIGHT,
  },
  'navigation-bar-left': {},
  'navigation-bar-center': {
    fontSize: 18,
    fontWeight: '500',
    position: 'absolute',
    left: 40,
    right: 40,
    top: 0,
    bottom: 0,
    textAlign: 'center',
    lineHeight: NAV_BAR_HEIGHT,
  },
  'navigation-bar-right': {
    fontSize: 16,
    color: $fontColor,
    paddingRight: 15,
  },
});

export default styles;
