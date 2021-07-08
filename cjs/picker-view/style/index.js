"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const rowHeight = 44;
const styles = react_native_1.StyleSheet.create({
    'wheel-view': {},
    'wheel-view-toolbar': {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    'wheel-view-cancel': {
        paddingHorizontal: 12,
        color: '#999',
        height: rowHeight,
        lineHeight: rowHeight,
        fontWeight: '500',
    },
    'wheel-view-title': {
        color: '#333',
        fontWeight: '500',
        height: rowHeight,
        lineHeight: rowHeight,
    },
    'wheel-view-confirm': {
        paddingHorizontal: 12,
        color: theme_1.default.$brandColor,
        height: rowHeight,
        lineHeight: rowHeight,
        fontWeight: '500',
    },
    'wheel-view-columns': {
        height: rowHeight * 5,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    'wheel-view-overlay': {
        zIndex: 1,
    },
    'wheel-view-selected': {
        position: 'absolute',
        left: 0,
        top: rowHeight * 2,
        width: '100%',
        height: rowHeight,
        backgroundColor: 'rgba(102, 204, 255, 0.08)',
    },
    'wheel-view-mask-top': {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: rowHeight * 2,
    },
    'wheel-view-mask-bottom': {
        position: 'absolute',
        left: 0,
        top: rowHeight * 3,
        width: '100%',
        height: rowHeight * 2,
    },
});
exports.default = styles;
