"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const defaultColor = '#E1E4EB';
const styles = react_native_1.StyleSheet.create({
    steps: {
        backgroundColor: 'red',
    },
    'steps-step': {
        position: 'relative',
        minHeight: 60,
        flexDirection: 'row',
        marginBottom: 10,
    },
    'steps-step-process': {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        marginRight: 5,
    },
    'steps-step-circle': {
        width: 8,
        height: 8,
        backgroundColor: theme_1.default.$brandColor,
        borderRadius: 8,
    },
    'steps-step-line-top': {
        position: 'absolute',
        width: 1,
        top: -10,
        bottom: '50%',
        backgroundColor: theme_1.default.$brandColor,
    },
    'steps-step-line-bottom': {
        position: 'absolute',
        width: 1,
        top: '50%',
        bottom: 0,
        backgroundColor: theme_1.default.$brandColor,
    },
    'steps-step-current': {
        width: 18,
        height: 18,
        borderRadius: 18,
        backgroundColor: theme_1.default.$light1,
    },
    'steps-step-content': {
        flexGrow: 1,
        padding: 10,
        backgroundColor: theme_1.default.$light1,
        borderRadius: 5,
    },
    'steps-step-header': {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    'steps-step-title': {
        color: theme_1.default.$fontColor,
        fontSize: 14,
        marginBottom: 5,
    },
    'steps-step-extra': {
        color: theme_1.default.$fontColor3,
        fontSize: 12,
    },
    'steps-step-description': {
        color: theme_1.default.$fontColor2,
        fontSize: 12,
    },
    'steps-arrow-step': {
        backgroundColor: defaultColor,
        height: 28.5,
        lineHeight: 28.5,
        textAlign: 'center',
        color: theme_1.default.$fontColor2,
        fontSize: 13,
        marginLeft: 10,
    },
    'steps-arrow-step-active': {
        backgroundColor: theme_1.default.$brandColor,
        color: theme_1.default.$light1,
    },
    'steps-arrow-step-head': {
        position: 'absolute',
        right: -7,
        height: 0,
        width: 0,
        borderTopWidth: 14.25,
        borderBottomWidth: 14.25,
        borderLeftWidth: 10,
        borderColor: defaultColor,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
    },
    'steps-arrow-step-head-active': {
        borderColor: theme_1.default.$brandColor,
    },
    'steps-arrow-step-tail': {
        position: 'absolute',
        left: 3,
        height: 0,
        width: 0,
        borderTopWidth: 14.25,
        borderBottomWidth: 14.25,
        borderLeftWidth: 10,
        borderColor: 'transparent',
        borderTopColor: defaultColor,
        borderBottomColor: defaultColor,
    },
    'steps-arrow-step-tail-active': {
        borderTopColor: theme_1.default.$brandColor,
        borderBottomColor: theme_1.default.$brandColor,
    },
});
exports.default = styles;
