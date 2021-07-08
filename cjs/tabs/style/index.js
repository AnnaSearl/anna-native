"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const styles = react_native_1.StyleSheet.create({
    tabs: {
        flex: 1,
    },
    'tabs-plain': {
        backgroundColor: '#FFFFFF',
    },
    'tabs-plain-item': {
        paddingHorizontal: 16,
    },
    'tabs-plain-item-text': {
        height: 40,
        lineHeight: 40,
        textAlign: 'center',
        fontSize: 13,
        color: theme_1.default.$fontColor3,
    },
    'tabs-plain-active': {
        position: 'absolute',
        width: 1,
        height: 2,
        left: 0,
        bottom: 0,
        backgroundColor: theme_1.default.$brandColor,
    },
    'tabs-container': {
        color: '#999',
        fontSize: 12,
        flex: 1,
    },
    'tabs-content-wrapper': {
        flex: 1,
        flexDirection: 'row',
    },
    'tabs-content': {
        flexShrink: 0,
        width: '100%',
    },
    'tabs-content-node': {
        flex: 1,
    },
    'tabs-content-inactive': {
        display: 'none',
    },
});
exports.default = styles;
