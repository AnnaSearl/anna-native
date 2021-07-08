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
const Input = props => {
    return React.createElement(react_native_1.TextInput, Object.assign({ placeholderTextColor: "#9DA1AD" }, props));
};
const TextArea = props => {
    const { value, maxLength, showCount, rows = 3 } = props;
    return (React.createElement(react_native_1.View, null,
        React.createElement(Input, Object.assign({ style: [style_1.default.textArea, { minHeight: 20 * rows }], multiline: true, numberOfLines: rows }, props)),
        showCount ? (React.createElement(react_native_1.Text, { style: style_1.default.count },
            (value === null || value === void 0 ? void 0 : value.length) || 0,
            "/",
            maxLength || 0)) : null));
};
Input.TextArea = TextArea;
exports.default = Input;
