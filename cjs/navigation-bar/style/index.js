"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const _util_1 = require("../../_util");
const _constants_1 = require("../../_constants");
const theme_1 = __importDefault(require("../../style/theme"));
const NAV_BAR_HEIGHT = react_native_1.Platform.OS === 'ios' ? _constants_1.NAV_BAR_HEIGHT_IOS : _constants_1.NAV_BAR_HEIGHT_ANDROID; // 导航栏的高度
const TOP_STATUS_BAR_HEIGHT = react_native_1.Platform.OS !== 'ios' || _util_1.isIPhoneX() ? 0 : _constants_1.STATUS_BAR_HEIGHT; // 状态栏的高度
const styles = react_native_1.StyleSheet.create({
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
        color: theme_1.default.$fontColor,
        paddingRight: 15,
    },
});
exports.default = styles;
