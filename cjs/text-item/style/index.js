"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const styles = react_native_1.StyleSheet.create({
    'text-item': {
        marginBottom: 10,
    },
    'text-item-horizontal': {
        flexDirection: 'row',
        alignItems: 'center',
    },
    'text-item-left': {
        marginRight: 20,
    },
    'text-item-label': {
        fontSize: 13,
        color: theme_1.default.$fontColor2,
        lineHeight: 18.5,
    },
    'text-item-description': {
        fontSize: 13,
        color: theme_1.default.$fontColor3,
        lineHeight: 18.5,
    },
    'text-item-value': {
        fontSize: 13,
        color: theme_1.default.$fontColor,
        lineHeight: 18.5,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        textAlign: 'right',
    },
    'text-item-value-end': {
        alignItems: 'flex-end',
    },
    'text-item-vertical-label': {
        marginBottom: 10,
    },
});
exports.default = styles;
