"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const styles = react_native_1.StyleSheet.create({
    cell: {
        position: 'relative',
        overflow: 'hidden',
        paddingHorizontal: 10,
        paddingVertical: 10,
        minHeight: 44,
        backgroundColor: theme_1.default.$light1,
    },
    'cell-horizontal': {
        flexDirection: 'row',
        alignItems: 'center',
    },
    'cell-required': {
        color: theme_1.default.$redColor,
        marginRight: 2,
    },
    'cell-left': {
        flexDirection: 'row',
        alignItems: 'center',
    },
    'cell-icon': {
        marginRight: 5,
    },
    'cell-label': {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    'cell-label-text': {
        color: theme_1.default.$fontColor1,
        fontWeight: '500',
    },
    'cell-label-description': {
        color: theme_1.default.$fontColor3,
    },
    'cell-right': {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    'cell-value': {
        flex: 1,
        color: theme_1.default.$fontColor3,
    },
    'cell-value-left': {
        textAlign: 'left',
    },
    'cell-value-right': {
        textAlign: 'right',
    },
    'cell-value-center': {
        textAlign: 'center',
    },
    'cell-vertical-top': {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    'cell-vertical-label': {
        flexDirection: 'row',
        alignItems: 'center',
    },
    'cell-vertical-value': {
        color: theme_1.default.$fontColor3,
    },
});
exports.default = styles;
