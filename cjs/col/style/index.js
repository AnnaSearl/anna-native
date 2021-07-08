"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const colStyle = {};
const span = 100 / 24;
for (let i = 1; i <= 24; i += 1) {
    colStyle['col-' + i] = {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: `${span * i}%`,
        maxWidth: '100%',
    };
    colStyle['col-offset-' + i] = {
        marginLeft: `${span * i}%`,
    };
}
const styles = react_native_1.StyleSheet.create(Object.assign({ col: {
        position: 'relative',
    } }, colStyle));
exports.default = styles;
