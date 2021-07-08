"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const styles = react_native_1.StyleSheet.create({
    'form-value': {
        fontSize: 14,
        color: theme_1.default.$fontColor,
    },
    'form-value-placeholder': {
        fontSize: 14,
        color: theme_1.default.$fontColor3,
    },
});
exports.default = styles;
