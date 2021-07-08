"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    wheel: {
        flex: 1,
    },
    'wheel-content': {
        transform: [{ translateY: 88 }],
    },
    'wheel-item': {
        height: 44,
    },
    'wheel-item-text': {
        color: '#000',
        lineHeight: 44,
        textAlign: 'center',
    },
});
exports.default = styles;
