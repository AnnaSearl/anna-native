"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const node_1 = __importDefault(require("../node"));
const safe_filling_1 = __importDefault(require("../safe-filling"));
const style_1 = __importDefault(require("./style"));
const prefixCls = 'dropdown';
const Dropdown = props => {
    const { open = false, zIndex, style, children, onClose } = props;
    const y = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    const fadeAnim = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    const height = react_1.useRef(0);
    const [showMask, setShowMask] = react_1.useState(false);
    react_1.useEffect(() => {
        if (open) {
            setShowMask(true);
            react_native_1.Animated.timing(y, {
                toValue: height.current,
                duration: 300,
                useNativeDriver: true,
            }).start(() => { });
            react_native_1.Animated.timing(fadeAnim, {
                toValue: 0.5,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
        else {
            react_native_1.Animated.timing(y, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
            react_native_1.Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setShowMask(false);
            });
        }
    }, [open]);
    const handLayout = (e) => {
        // 当对父元素设置 display: 'none' 时 获取到的 height 为 0， 所有加上非0判断
        if (e.nativeEvent.layout.height) {
            height.current = e.nativeEvent.layout.height;
        }
    };
    const handlePressMask = (e) => {
        e.stopPropagation();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    return (react_1.default.createElement(react_native_1.View, { style: [
            style_1.default[prefixCls],
            { zIndex },
            // 使用 display: 'none' 会导致 第一次获取 contaner 的 height 为 0
            // showMask ? { display: 'flex' } : { display: 'none', position: 'relative' },
            showMask ? { height: 1000 } : { height: 0 },
        ] },
        react_1.default.createElement(react_native_1.Animated.View, { style: [style_1.default[`${prefixCls}-mask`], { opacity: fadeAnim }] },
            react_1.default.createElement(react_native_1.Pressable, { style: style_1.default[`${prefixCls}-mask-pressable`], onPress: handlePressMask })),
        react_1.default.createElement(react_native_1.Animated.View, { style: [style_1.default[`${prefixCls}-contaner`], style, { transform: [{ translateY: y }] }], onLayout: handLayout },
            react_1.default.createElement(safe_filling_1.default, null),
            react_1.default.createElement(node_1.default, null, children))));
};
exports.default = Dropdown;
