"use strict";
/* eslint-disable */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_svg_1 = require("react-native-svg");
const helper_1 = require("./helper");
let IconlineDoubt = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 96c229.76 0 416 186.24 416 416S741.76 928 512 928 96 741.76 96 512 282.24 96 512 96z m0 64c-194.4 0-352 157.6-352 352s157.6 352 352 352 352-157.6 352-352-157.6-352-352-352z m0 512a32 32 0 1 1 0 64 32 32 0 0 1 0-64z m0-384a128 128 0 0 1 127.84 121.6l0.16 6.4a128.064 128.064 0 0 1-96 123.968V608a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32 64 64 0 0 0 4.8-127.84L512 352a64 64 0 0 0-63.84 59.2L448 416a32 32 0 0 1-64 0 128 128 0 0 1 128-128z", fill: helper_1.getIconColor(color, 0, '#333333') })));
};
IconlineDoubt.defaultProps = {
    size: 18,
};
IconlineDoubt = react_1.default.memo ? react_1.default.memo(IconlineDoubt) : IconlineDoubt;
exports.default = IconlineDoubt;
