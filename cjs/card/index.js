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
const style_1 = __importDefault(require("./style"));
const prefixCls = 'card';
const Card = (props) => {
    const { title, titleNumberOfLines, titleSize, headerBorder, description, extra, style, contentStyle, children, onPress, } = props;
    const renderHead = () => {
        return title || description || extra ? (React.createElement(react_native_1.View, { style: [style_1.default[`${prefixCls}-header`], headerBorder ? { paddingBottom: 10 } : null] },
            headerBorder ? React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-header-border`] }) : null,
            React.createElement(react_native_1.View, { style: [style_1.default[`${prefixCls}-header-left`]] },
                title ? (React.createElement(node_1.default, { style: [
                        style_1.default[`${prefixCls}-title`],
                        titleSize === 'small' ? style_1.default[`${prefixCls}-title-${titleSize}`] : null,
                    ], numberOfLines: titleNumberOfLines }, title)) : null,
                description ? (React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-description`] },
                    React.createElement(node_1.default, null, description))) : null),
            React.createElement(node_1.default, { style: style_1.default[`${prefixCls}-extra`] }, extra))) : null;
    };
    return (React.createElement(react_native_1.Pressable, { style: [style_1.default[prefixCls], style], onPress: onPress },
        renderHead(),
        React.createElement(react_native_1.View, { style: [style_1.default[`${prefixCls}-content`], contentStyle] },
            React.createElement(node_1.default, null, children))));
};
exports.default = Card;
