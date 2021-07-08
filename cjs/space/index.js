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
const prefixCls = 'space';
const renderItems = (children, size, direction) => {
    let itemStyle;
    if (Array.isArray(size)) {
        if (typeof size[0] === 'number' && typeof size[1] === 'number') {
            if (direction === 'vertical') {
                itemStyle = { marginBottom: size[0] };
            }
            else {
                itemStyle = { marginRight: size[0], marginBottom: size[1] };
            }
        }
    }
    else {
        if (typeof size === 'string' && size) {
            itemStyle = style_1.default[`${prefixCls}-${direction}-${size}`];
        }
        if (typeof size === 'number') {
            if (direction === 'vertical') {
                itemStyle = { marginBottom: size };
            }
            else {
                itemStyle = { marginRight: size };
            }
        }
    }
    const items = React.Children.toArray(children).filter(child => child !== undefined && child !== null);
    const itemNodes = items.map((child, index) => {
        const childStyle = [
            itemStyle,
            index === items.length - 1 &&
                (direction === 'horizontal' ? { marginRight: 0 } : { marginBottom: 0 }),
        ];
        return (React.createElement(node_1.default, { key: index, style: childStyle }, child));
    });
    return itemNodes;
};
const Space = (props) => {
    const { size = 'small', direction = 'horizontal', align = direction === 'horizontal' ? 'center' : undefined, justify, wrap, style, children, } = props;
    const wrapperStyle = [
        style_1.default[prefixCls],
        style_1.default[`${prefixCls}-align-${align}`],
        { justifyContent: justify },
        direction === 'horizontal' && wrap ? { flexWrap: 'wrap' } : null,
        style,
    ];
    return React.createElement(react_native_1.View, { style: wrapperStyle }, renderItems(children, size, direction));
};
exports.default = Space;
