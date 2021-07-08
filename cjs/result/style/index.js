"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const styles = react_native_1.StyleSheet.create({
    result: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    'result-icon': {
        alignItems: 'center',
        marginTop: 59.5,
        marginBottom: 19.5,
    },
    successIcon: {
        width: 72,
        height: 92,
        margin: 'auto',
    },
    'result-title': {
        textAlign: 'center',
        color: theme_1.default.$fontColor,
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 28,
    },
    'result-subTitle': {
        textAlign: 'center',
        color: theme_1.default.$fontColor2,
        fontSize: 13,
        lineHeight: 18.5,
        marginTop: 7.5,
        paddingHorizontal: 35,
    },
    'result-extra': {
        marginTop: 30,
    },
});
exports.default = styles;
