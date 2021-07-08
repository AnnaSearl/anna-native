"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    checkbox: {
        overflow: 'hidden',
        flexDirection: 'row',
    },
    'checkbox-icon': {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
    },
    'checkbox-disabled': {
        width: 17,
        height: 17,
        borderRadius: 17,
        backgroundColor: '#9DA1AD',
    },
    'checkbox-unchecked': {
        width: 17,
        height: 17,
        borderWidth: 0.5,
        borderColor: '#9DA1AD',
        borderRadius: 17,
    },
    'checkbox-content': {
    // flex: 1,
    // alignItems: 'center',
    },
});
exports.default = styles;
