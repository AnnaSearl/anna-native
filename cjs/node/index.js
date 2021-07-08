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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const Node = props => {
    const { style, numberOfLines, children, onLayout, onStartShouldSetResponderCapture } = props;
    if (children === undefined || children === null) {
        return React.createElement(react_native_1.View, null, null);
    }
    if (typeof children === 'string' || typeof children === 'number') {
        return (React.createElement(react_native_1.Text, { style: style, numberOfLines: numberOfLines, onLayout: onLayout }, children));
    }
    return (React.createElement(react_native_1.View, { style: style, onLayout: onLayout, onStartShouldSetResponderCapture: onStartShouldSetResponderCapture }, children));
};
exports.default = Node;
