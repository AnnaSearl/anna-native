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
const mask_1 = __importDefault(require("../mask"));
const icon_1 = __importDefault(require("../icon"));
const safe_filling_1 = __importDefault(require("../safe-filling"));
const style_1 = __importDefault(require("./style"));
const prefixCls = 'popup';
const Popup = props => {
    const { open = false, title, closeable, position, transparent, style, safeArea, children, onClose, } = props;
    const distance = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    const size = react_1.useRef(0);
    const [showMask, setShowMask] = react_1.useState(false);
    react_1.useEffect(() => {
        if (open) {
            setShowMask(true);
            react_native_1.Animated.timing(distance, {
                toValue: -size.current,
                duration: 300,
                useNativeDriver: true,
            }).start(() => { });
        }
        else {
            react_native_1.Animated.timing(distance, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setShowMask(false);
            });
        }
    }, [open]);
    const handleClose = () => {
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    const handLayout = (e) => {
        let isFirst = false;
        if (size.current) {
            isFirst = false;
        }
        else {
            isFirst = true;
        }
        if (position === 'top' || position === 'bottom') {
            size.current = e.nativeEvent.layout.height;
        }
        if (position === 'left' || position === 'right') {
            size.current = e.nativeEvent.layout.width;
        }
        if (isFirst) {
            react_native_1.Animated.timing(distance, {
                toValue: -size.current,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    };
    let transformStyle = {};
    if (position === 'top') {
        transformStyle = { transform: [{ translateY: distance }] };
    }
    if (position === 'bottom') {
        transformStyle = { transform: [{ translateY: distance }] };
    }
    if (position === 'left') {
        transformStyle = { transform: [{ translateX: distance }] };
    }
    if (position === 'right') {
        transformStyle = { transform: [{ translateX: distance }] };
    }
    return (react_1.default.createElement(mask_1.default, { show: showMask, onPress: handleClose },
        react_1.default.createElement(react_native_1.View, { style: style_1.default[prefixCls] },
            react_1.default.createElement(react_native_1.TouchableWithoutFeedback, null,
                react_1.default.createElement(react_native_1.Animated.View, { style: [
                        style_1.default[`${prefixCls}-contaner`],
                        style_1.default[`${prefixCls}-contaner-${position}`],
                        transparent ? { backgroundColor: 'transparent' } : null,
                        style,
                        transformStyle,
                    ], onLayout: handLayout },
                    title ? react_1.default.createElement(node_1.default, { style: style_1.default[`${prefixCls}-title`] }, title) : null,
                    closeable ? (react_1.default.createElement(react_native_1.Pressable, { style: style_1.default[`${prefixCls}-close`], onPress: handleClose },
                        react_1.default.createElement(icon_1.default, { name: "close", size: 16, color: "#999" }))) : null,
                    react_1.default.createElement(node_1.default, { style: style_1.default[`${prefixCls}-content`] }, children),
                    safeArea ? react_1.default.createElement(safe_filling_1.default, { bottom: true }) : null)))));
};
exports.default = Popup;
