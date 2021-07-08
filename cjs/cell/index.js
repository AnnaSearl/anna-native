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
const icon_1 = __importDefault(require("../icon"));
const style_1 = __importDefault(require("./style"));
const theme_1 = __importDefault(require("../style/theme"));
const prefixCls = 'cell';
const Cell = (props) => {
    const { label, style, labelStyle, valueStyle, labelDescription, labelDescriptionStyle, children, vertical, icon, iconSize, arrow, extra, required, defaultNullValue = '', textAlign = 'right', onPress, } = props;
    if (vertical) {
        return (React.createElement(react_native_1.Pressable, { style: [style_1.default[prefixCls], style], onPress: onPress },
            label ? (React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-vertical-top`] },
                required ? React.createElement(react_native_1.Text, { style: style_1.default[`${prefixCls}-required`] }, "*") : null,
                label ? (React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-vertical-label`] },
                    React.createElement(node_1.default, { style: [style_1.default[`${prefixCls}-label-text`], labelStyle] }, label),
                    React.createElement(node_1.default, { style: [style_1.default[`${prefixCls}-label-description`], labelDescriptionStyle] }, labelDescription))) : null)) : null,
            React.createElement(node_1.default, { style: [style_1.default[`${prefixCls}-vertical-value`], valueStyle] }, children)));
    }
    return (React.createElement(react_native_1.Pressable, { style: [style_1.default[prefixCls], style_1.default[`${prefixCls}-horizontal`], style], onPress: onPress },
        React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-left`] },
            required ? React.createElement(react_native_1.Text, { style: style_1.default[`${prefixCls}-required`] }, "*") : null,
            icon ? (React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-icon`] },
                React.createElement(icon_1.default, { name: icon, size: iconSize || 18, style: { marginRight: '10px' }, color: "#333" }))) : null,
            label ? (React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-label`] },
                React.createElement(node_1.default, { style: [style_1.default[`${prefixCls}-label-text`], labelStyle] }, label),
                React.createElement(node_1.default, { style: [style_1.default[`${prefixCls}-label-description`], labelDescriptionStyle] }, labelDescription))) : null),
        React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-right`] },
            React.createElement(node_1.default, { style: [
                    style_1.default[`${prefixCls}-value`],
                    style_1.default[`${prefixCls}-value-${textAlign}`],
                    valueStyle,
                ] }, children || children === 0 ? children : defaultNullValue),
            extra ? React.createElement(node_1.default, { style: style_1.default[`${prefixCls}-extra`] }, extra) : null,
            arrow ? (React.createElement(react_native_1.View, { style: { marginLeft: 3 } },
                React.createElement(icon_1.default, { name: "iconline-return-24", size: 12, color: theme_1.default.$fontColor3 }))) : null)));
};
exports.default = Cell;
