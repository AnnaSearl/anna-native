"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStylesWithTheme = void 0;
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const createStylesWithTheme = (theme) => {
    const { colors } = theme;
    const { primary } = colors;
    const styles = react_native_1.StyleSheet.create({
        tag: {
            position: 'relative',
            overflow: 'hidden',
            paddingHorizontal: 5,
            borderRadius: 2,
            backgroundColor: '#F6F6F6',
            height: 20,
            lineHeight: 20,
            fontSize: 12,
            textAlign: 'center',
        },
        'tag-plain': {
            borderWidth: 0.5,
            borderColor: theme_1.default.$fontColor2,
            color: theme_1.default.$fontColor2,
            lineHeight: 19,
            backgroundColor: 'transparent',
        },
        'tag-small': {
            height: 16.5,
            lineHeight: 15.5,
            paddingHorizontal: 3,
        },
        'tag-large': {},
        'tag-xlarge': {
            height: 32,
            lineHeight: 32,
        },
        'tag-blue': {
            color: '#1467FF',
            backgroundColor: theme_1.default.$brandSecondaryColor,
        },
        'tag-green': {
            color: '#00B94F',
            backgroundColor: '#E5F8ED',
        },
        'tag-yellow': {
            color: '#F58F00',
            backgroundColor: '#FFF0DA',
        },
        'tag-red': {
            color: '#F81A33',
            backgroundColor: 'rgba(248, 26, 51, 0.08)',
        },
        'tag-dark': {
            color: '#FFFFFF',
            backgroundColor: '#333333',
        },
        'tag-gray': {
            color: '#9DA1AD',
            backgroundColor: '#F4F4F4',
        },
        'tag-checkable-default': {
            height: 32,
            lineHeight: 31,
            borderWidth: 0.5,
            borderColor: theme_1.default.$light6,
            color: theme_1.default.$fontColor,
            fontSize: 12,
            borderRadius: 4,
            paddingHorizontal: 12,
        },
        'tag-checkable-secondary': {
            height: 32,
            lineHeight: 31,
            borderWidth: 0.5,
            borderColor: primary,
            backgroundColor: primary,
            color: theme_1.default.$lightBase,
        },
        'tag-disabled': {
            color: '#D7D8DB',
            backgroundColor: theme_1.default.$light6,
        },
    });
    return styles;
};
exports.createStylesWithTheme = createStylesWithTheme;
