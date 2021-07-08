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
const style_1 = __importDefault(require("./style"));
const prefixCls = 'tag';
const Tag = props => {
    const { size, look, plain, color, disabled, style, children, onPress } = props;
    const tagStyle = [
        style_1.default[prefixCls],
        plain ? style_1.default[`${prefixCls}-plain`] : null,
        style_1.default[`${prefixCls}-${size}`],
        style_1.default[`${prefixCls}-${look}`],
        color ? { color, borderColor: color } : null,
        style,
        disabled ? style_1.default[`${prefixCls}-disabled`] : null,
    ];
    const handlePress = (e) => {
        if (disabled) {
            return;
        }
        onPress === null || onPress === void 0 ? void 0 : onPress(e);
    };
    return (React.createElement(react_native_1.Pressable, { onPress: handlePress },
        React.createElement(node_1.default, { style: tagStyle }, children)));
};
const CheckableTag = props => {
    const { theme, checked, style, children, onChange } = props;
    const { colors } = theme;
    const { primary } = colors;
    const handlePress = () => {
        onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    };
    return (React.createElement(Tag, Object.assign({}, props, { style: [
            style_1.default[`${prefixCls}-checkable-default`],
            checked
                ? Object.assign(Object.assign({}, style_1.default[`${prefixCls}-checkable-secondary`]), { backgroundColor: primary }) : null,
            style,
        ], onPress: handlePress }), children));
};
Tag.CheckableTag = theme_1.withTheme(CheckableTag);
exports.default = theme_1.withTheme(Tag);
