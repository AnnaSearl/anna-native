"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    tag: {
        position: 'relative',
        overflow: 'hidden',
        paddingHorizontal: 5,
        borderRadius: 2,
        backgroundColor: '#F6F6F6',
        height: 20,
        lineHeight: 20,
        fontSize: 12,
    },
    'tag-small': {},
    'tag-large': {},
    'tag-blue': {
        color: '#1467FF',
        backgroundColor: '#ECF5FF',
    },
    'tag-yellow': {
        color: '#F58F00',
        backgroundColor: '#FFF0DA',
    },
});
exports.default = styles;
