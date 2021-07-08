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
const node_1 = __importDefault(require("../node"));
const theme_1 = require("../theme");
const style_1 = require("./style");
const prefixCls = 'btn';
const Button = props => {
    const { type, shape, plain, size, disabled, look, width, style, textStyle, theme, children, onPress, } = props;
    const styles = style_1.createStylesWithTheme(theme);
    const btnStyle = [
        styles[prefixCls],
        styles[`${prefixCls}-${shape}`],
        styles[`${prefixCls}-${type}`],
        styles[`${prefixCls}-${size}`],
        styles[`${prefixCls}-${plain && 'plain'}`],
        styles[`${prefixCls}-${plain && type === 'primary' && 'plain-primary'}`],
        styles[`${prefixCls}-${look}`],
        styles[`${prefixCls}-${disabled && 'disabled'}`],
        width && { width: width },
        style,
    ].filter(i => i);
    const btnTextStyle = [
        styles[`${prefixCls}-text`],
        styles[`${prefixCls}-${type}-text`],
        styles[`${prefixCls}-${size}-text`],
        styles[`${prefixCls}-${plain && 'plain'}-text`],
        styles[`${prefixCls}-${plain && type === 'primary' && 'plain-primary'}-text`],
        styles[`${prefixCls}-${look}-text`],
        styles[`${prefixCls}-${disabled && 'disabled'}-text`],
        textStyle,
    ].filter(i => i);
    const handlePress = () => {
        onPress === null || onPress === void 0 ? void 0 : onPress();
    };
    return (React.createElement(react_native_1.TouchableOpacity, { style: btnStyle, onPress: handlePress, disabled: disabled },
        React.createElement(node_1.default, { style: btnTextStyle }, children),
        size === 'xxlarge' && type === 'primary' && !disabled ? (React.createElement(react_native_1.View, { style: styles[`${prefixCls}-top-border-patch`] })) : null));
};
exports.default = theme_1.withTheme(Button);
