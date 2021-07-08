"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const styles = react_native_1.StyleSheet.create({
    'action-sheet': {
        position: 'relative',
        overflow: 'hidden',
    },
    'action-sheet-container': {
        marginTop: 0,
        marginBottom: 8,
        marginHorizontal: 12,
        borderRadius: 16,
        overflow: 'hidden',
    },
    'action-sheet-cover': {
        marginBottom: 0,
        marginHorizontal: 0,
        borderRadius: 0,
    },
    'action-sheet-menu': {
        paddingBottom: 8,
        backgroundColor: theme_1.default.$light5,
    },
    'action-sheet-action': {
        position: 'relative',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    },
    'action-sheet-action-text': {
        minHeight: 56,
        lineHeight: 56,
        textAlign: 'center',
        backgroundColor: theme_1.default.$light1,
        fontSize: 17,
    },
    'action-sheet-action-destructive': {
        color: theme_1.default.$dangerColor,
    },
    'action-sheet-grid': {
        position: 'relative',
        backgroundColor: theme_1.default.$light1,
    },
    'action-sheet-grid-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 16,
    },
    'action-sheet-grid-item': {
        position: 'relative',
        width: 53,
        maxWidth: 53,
        marginRight: 18,
    },
    'action-sheet-grid-item-icon': {
        justifyContent: 'center',
        alignItems: 'center',
        height: 53,
        width: 53,
        borderRadius: 8,
        backgroundColor: theme_1.default.$light4,
        overflow: 'hidden',
        fontWeight: '500',
        fontSize: 16,
    },
    'action-sheet-grid-item-name': {
        marginTop: 8,
        fontSize: 12,
        textAlign: 'center',
    },
    'action-sheet-title': {
        fontSize: 12,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    'action-sheet-cancel': {
        height: 56,
        lineHeight: 56,
        textAlign: 'center',
        backgroundColor: theme_1.default.$light1,
        fontSize: 17,
    },
});
exports.default = styles;
