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
const iconfont_1 = __importDefault(require("../assets/iconfont"));
const Icon = props => {
    const { name, size, color, style } = props;
    return (React.createElement(react_native_1.View, { style: style },
        React.createElement(iconfont_1.default, { name: name, size: size, color: color })));
};
const PressableIcon = props => {
    const { name, size, color, style, onPress } = props;
    return (React.createElement(react_native_1.Pressable, { onPress: onPress },
        React.createElement(Icon, { style: style, name: name, size: size, color: color })));
};
Icon.PressableIcon = PressableIcon;
exports.default = Icon;
