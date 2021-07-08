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
const react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
const node_1 = __importDefault(require("../node"));
const style_1 = __importDefault(require("./style"));
const prefixCls = 'wheel-view';
const PickerView = props => {
    const { title, children, onOK, onCancel } = props;
    return (React.createElement(react_native_1.View, { style: style_1.default[prefixCls] },
        React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-toolbar`] },
            React.createElement(react_native_1.Pressable, { onPress: onCancel },
                React.createElement(react_native_1.Text, { style: style_1.default[`${prefixCls}-cancel`] }, "\u53D6\u6D88")),
            React.createElement(node_1.default, { style: style_1.default[`${prefixCls}-tittle`] }, title),
            React.createElement(react_native_1.Pressable, { onPress: onOK },
                React.createElement(react_native_1.Text, { style: style_1.default[`${prefixCls}-confirm`] }, "\u786E\u5B9A"))),
        React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-overlay`], pointerEvents: "none" },
                React.createElement(react_native_1.View, { style: [style_1.default[`${prefixCls}-selected`]] }),
                React.createElement(react_native_linear_gradient_1.default, { style: [style_1.default[`${prefixCls}-mask-top`]], start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ['hsla(0, 0%, 100%, 0.9)', 'hsla(0, 0%, 100%, 0.4)'] }),
                React.createElement(react_native_linear_gradient_1.default, { style: [style_1.default[`${prefixCls}-mask-bottom`]], start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ['hsla(0, 0%, 100%, 0.4)', 'hsla(0, 0%, 100%, 0.9)'] })),
            React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-columns`] }, children))));
};
exports.default = PickerView;
