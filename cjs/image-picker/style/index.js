"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../../style/theme"));
const styles = react_native_1.StyleSheet.create({
    'image-picker': {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    'image-picker-file': {
        position: 'relative',
        marginRight: 10,
    },
    'image-picker-delete': {
        position: 'absolute',
        top: 2.5,
        right: 2.5,
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(153, 153, 153, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    'image-picker-image': {
        height: 85,
        width: 85,
        backgroundColor: theme_1.default.$gray4,
        borderRadius: 5,
    },
    'image-picker-add': {
        height: 85,
        width: 85,
        backgroundColor: theme_1.default.$light5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    'image-picker-add-icon': {
        marginBottom: 5,
    },
    'image-picker-add-text': {
        textAlign: 'center',
        lineHeight: 16.5,
        fontSize: 12,
        color: theme_1.default.$fontColor3,
    },
});
exports.default = styles;
