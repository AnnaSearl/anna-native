"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const styles = react_native_1.StyleSheet.create({
    card: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        color: '#333',
    },
    'card-header': {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: '500',
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    'card-header-border': {
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 0,
        height: 0.5,
        backgroundColor: '#DEDEDE',
    },
    'card-header-left': {
        flex: 1,
        marginRight: 10,
    },
    'card-title': {
        color: '#1B2844',
        fontSize: 15,
        fontWeight: '500',
    },
    'card-title-small': {
        fontSize: 13,
    },
    'card-description': {
        color: '#999',
        fontSize: 12,
        marginTop: 10,
    },
    'card-extra': {
        color: theme_1.default.$fontColor,
        fontSize: 13,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    'card-content': {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    'card-content-head': {
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: '500',
        paddingBottom: 10,
    },
});
exports.default = styles;
