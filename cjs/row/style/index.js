"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    'row-justify-start': {
        justifyContent: 'flex-start',
    },
    'row-justify-center': {
        justifyContent: 'center',
    },
    'row-justify-end': {
        justifyContent: 'flex-end',
    },
    'row-justify-space-around': {
        justifyContent: 'space-around',
    },
    'row-justify-space-between': {
        justifyContent: 'space-between',
    },
    'row-align-top': {
        alignItems: 'flex-start',
    },
    'row-align-middle': {
        alignItems: 'center',
    },
    'row-align-bottom': {
        alignItems: 'flex-end',
    },
});
exports.default = styles;
