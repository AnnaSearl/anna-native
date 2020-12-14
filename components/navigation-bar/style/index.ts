// @ts-ignore
import { StyleSheet, Platform, DeviceInfo } from "react-native";
import { $brandColor } from "../../style/theme";

const NAV_BAR_HEIGHT_IOS = 44; // 导航栏在iOS中的高度
const NAV_BAR_HEIGHT_ANDROID = 50; // 导航栏在Android中的高度
const NAV_BAR_HEIGHT =
  Platform.OS === "ios" ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID; // 导航栏的高度
const STATUS_BAR_HEIGHT =
  Platform.OS !== "ios" || DeviceInfo.isIPhoneX_deprecated ? 0 : 20; // 状态栏的高度

const styles = StyleSheet.create<any>({
  "navigation-bar": {},
  "navigation-bar-status": {
    height: STATUS_BAR_HEIGHT,
  },
  "navigation-bar-content": {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: NAV_BAR_HEIGHT,
  },
  "navigation-bar-left": {},
  "navigation-bar-center": {
    fontSize: 18,
    fontWeight: "500",
    position: "absolute",
    left: 40,
    right: 40,
    top: 0,
    bottom: 0,
    textAlign: "center",
    lineHeight: NAV_BAR_HEIGHT,
  },
  "navigation-bar-right": {
    fontSize: 16,
    color: $brandColor,
    paddingRight: 15,
  },
});

export default styles;
