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
const style_1 = __importDefault(require("./style"));
const icon_1 = __importDefault(require("../icon"));
const Input = (props, ref) => {
    const { clearButtonMode, value, clearBtnStyle } = props;
    const clearClick = () => {
        if (props.onChangeText) {
            props.onChangeText('');
        }
        if (props.onClear) {
            props.onClear();
        }
    };
    return (React.createElement(react_native_1.View, { style: style_1.default.content },
        React.createElement(react_native_1.TextInput, Object.assign({ style: style_1.default.input, value: value, ref: ref }, props, { clearButtonMode: "never" })),
        clearButtonMode && clearButtonMode !== 'never' && value && value.length > 0 ? (React.createElement(react_native_1.Pressable, { onPress: clearClick, style: [style_1.default.icon, clearBtnStyle] },
            React.createElement(icon_1.default, { name: "fill-error", size: 18, color: "#babec6" }))) : null));
};
exports.default = React.forwardRef(Input);
