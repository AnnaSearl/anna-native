"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const screen = react_native_1.Dimensions.get('screen');
const styles = react_native_1.StyleSheet.create({
    // 必须设置最外层元素就是 absolute，否则在 android 上会导致点击穿透问题。
    // 对子元素设置 absolute 虽然看起来 UI 覆盖了与父元素平级的元素，但是在 android 上点击会穿透。
    dropdown: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: screen.width,
        height: screen.height,
        overflow: 'hidden',
    },
    'dropdown-mask': {
        position: 'absolute',
        left: 0,
        top: 0,
        width: screen.width,
        height: screen.height,
        backgroundColor: '#000000',
    },
    'dropdown-mask-pressable': {
        flex: 1,
    },
    'dropdown-contaner': {
        position: 'absolute',
        minHeight: 40,
        backgroundColor: '#FFFFFF',
        left: 0,
        right: 0,
        bottom: '100%',
    },
});
exports.default = styles;
