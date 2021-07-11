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
        btn: {
            position: 'relative',
            paddingHorizontal: 16,
            borderRadius: 32,
            backgroundColor: theme_1.default.$btnDefaultBg,
            overflow: 'hidden',
        },
        'btn-text': {
            height: 32,
            lineHeight: 32,
            fontSize: 13,
            textAlign: 'center',
            color: primary,
        },
        'btn-small': {
            paddingHorizontal: 10,
            borderRadius: 29,
        },
        'btn-square': {
            borderRadius: 2,
        },
        'btn-circle': {
            paddingHorizontal: 0,
            borderRadius: 32,
            minWidth: 32,
        },
        'btn-small-text': {
            height: 29,
            lineHeight: 29,
        },
        'btn-large': {
            paddingHorizontal: 20,
            borderRadius: 37,
        },
        'btn-large-text': {
            height: 37,
            lineHeight: 37,
            fontSize: 16,
            fontWeight: '500',
        },
        'btn-xlarge': {
            paddingHorizontal: 20,
            borderRadius: 40,
        },
        'btn-xlarge-text': {
            height: 40,
            lineHeight: 40,
            fontSize: 16,
            fontWeight: '500',
        },
        'btn-xxlarge': {
            paddingHorizontal: 20,
            borderRadius: 44,
        },
        'btn-xxlarge-text': {
            height: 44,
            lineHeight: 44,
            fontSize: 18,
            fontWeight: '600',
        },
        'btn-top-border-patch': {
            position: 'absolute',
            height: 0.5,
            backgroundColor: primary,
            top: -0.5,
            left: 0,
            right: 0,
        },
        'btn-primary': {
            backgroundColor: primary,
        },
        'btn-primary-text': {
            color: theme_1.default.$light1,
        },
        'btn-plain': {
            borderColor: '#8D93A1',
            borderWidth: 0.5,
            backgroundColor: theme_1.default.$light1,
        },
        'btn-plain-text': {
            color: theme_1.default.$fontColor1,
        },
        'btn-plain-primary': {
            borderColor: primary,
            borderWidth: 0.5,
            backgroundColor: theme_1.default.$light1,
        },
        'btn-plain-primary-text': {
            color: primary,
        },
        'btn-secondary': {
            backgroundColor: theme_1.default.$brandSecondaryColor,
        },
        'btn-secondary-text': {
            color: primary,
        },
        'btn-disabled': {
            borderColor: '#E1E2E6',
            borderWidth: 0.5,
            backgroundColor: '#E1E2E6',
        },
        'btn-disabled-text': {
            color: '#FFFFFF',
        },
    });
    return styles;
};
exports.createStylesWithTheme = createStylesWithTheme;
