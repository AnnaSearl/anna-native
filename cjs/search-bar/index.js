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
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const icon_1 = __importDefault(require("../icon"));
const clear_input_1 = __importDefault(require("../clear-input"));
const theme_1 = __importDefault(require("../style/theme"));
const style_1 = __importDefault(require("./style"));
const prefixCls = 'search-bar';
const SearchBar = (props, ref) => {
    const { value, returnKeyType, showActionButton, placeholder, style, containerStyle, clearButtonMode = 'while-editing', autoFocus, onFocus, onBlur, onActionPress, onChangeText, onSubmitEditing, } = props;
    const marginRightAnim = React.useRef(new react_native_1.Animated.Value(-100)).current;
    React.useEffect(() => {
        if (showActionButton) {
            react_native_1.Animated.timing(marginRightAnim, {
                toValue: 10,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
        else {
            react_native_1.Animated.timing(marginRightAnim, {
                toValue: -100,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
    }, [showActionButton]);
    return (React.createElement(react_native_1.View, { style: [style_1.default[prefixCls], containerStyle] },
        React.createElement(react_native_1.View, { style: [style_1.default[`${prefixCls}-input`], style] },
            React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-icon`] },
                React.createElement(icon_1.default, { name: "search", size: 16, color: "#666" })),
            React.createElement(clear_input_1.default, { style: style_1.default[`${prefixCls}-value`], placeholder: placeholder, autoFocus: autoFocus, onFocus: onFocus, onBlur: onBlur, onChangeText: onChangeText, clearButtonMode: clearButtonMode, onSubmitEditing: onSubmitEditing, value: value, returnKeyType: returnKeyType, ref: ref, underlineColorAndroid: 'transparent', placeholderTextColor: theme_1.default.$fontColor3, clearBtnStyle: { right: 20 } })),
        React.createElement(react_native_1.Pressable, { onPress: onActionPress },
            React.createElement(react_native_1.Animated.View, { style: [style_1.default[`${prefixCls}-action`], { marginRight: marginRightAnim }] },
                React.createElement(react_native_1.Text, { style: style_1.default[`${prefixCls}-action-text`] }, "\u53D6\u6D88")))));
};
exports.default = React.forwardRef(SearchBar);
