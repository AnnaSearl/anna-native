"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    'loading-container': {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    'loading-box': {
        width: 100,
        height: 100,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    loading: {
        width: 50,
        height: 50,
    },
    'loading-text': {
        color: '#FFFFFF',
    },
});
exports.default = styles;
