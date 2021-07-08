"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const styles = react_native_1.StyleSheet.create({
    selector: {
        flexDirection: 'row',
    },
    'selector-parent': {
        width: 140,
        backgroundColor: theme_1.default.$light6,
    },
    'selector-children': {
        flex: 1,
    },
    'selector-option': {
        height: 44,
    },
    'selector-option-text': {
        paddingLeft: 15,
        lineHeight: 44,
        fontSize: 14,
        color: '#666',
    },
    'selector-active': {
        color: theme_1.default.$brandColor,
        fontWeight: '500',
        backgroundColor: theme_1.default.$lightBase,
    },
});
exports.default = styles;
