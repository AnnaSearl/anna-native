"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const stepHeight = 50;
const styles = react_native_1.StyleSheet.create({
    cascade: {
        textAlign: 'left',
        backgroundColor: theme_1.default.$light4,
    },
    'cascade-selected': {
        minHeight: 45,
        backgroundColor: theme_1.default.$lightBase,
        paddingVertical: 12,
    },
    'cascade-step': {
        position: 'relative',
        height: stepHeight,
        paddingLeft: 44,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    'cascade-step-text': {
        lineHeight: stepHeight,
        color: theme_1.default.$dark2,
        fontSize: 15,
    },
    'cascade-step-dot': {
        position: 'absolute',
        width: 9,
        height: 9,
        borderRadius: 9,
        bottom: '50%',
        left: 15,
        marginBottom: -4.5,
        backgroundColor: theme_1.default.$brandColor,
    },
    'cascade-step-line': {
        position: 'absolute',
        bottom: '50%',
        left: 15 + 4,
        width: 1,
        height: stepHeight,
        backgroundColor: theme_1.default.$brandColor,
    },
    'cascade-step-right': {
        flexDirection: 'row',
        alignItems: 'center',
    },
    'cascade-step-prompt': {
        paddingRight: 5,
    },
    'cascade-step-prompt-text': {
        color: theme_1.default.$dark4,
        fontSize: 15,
    },
    'cascade-options': {
        minHeight: 100,
        paddingHorizontal: 15,
    },
    'cascade-title': {
        paddingTop: 15,
        paddingBottom: 5,
    },
    'cascade-title-text': {
        fontSize: 12,
        color: theme_1.default.$dark3,
    },
    'cascade-option': {
        paddingVertical: 15,
    },
    'cascade-option-text': {
        color: theme_1.default.$dark2,
        fontSize: 15,
    },
});
exports.default = styles;
