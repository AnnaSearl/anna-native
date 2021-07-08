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
let IconpullUp = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M946.944 651.605333L558.08 226.389333a61.184 61.184 0 0 0-91.989333 0l-388.864 425.216a72.106667 72.106667 0 0 0 45.99466599 121.429334L900.69333301 773.034667a71.936 71.936 0 0 0 61.184-46.250667 71.936 71.936 0 0 0-8.36266601-67.242667l-6.570667-7.936z", fill: helper_1.getIconColor(color, 0, '#000000') })));
};
IconpullUp.defaultProps = {
    size: 18,
};
IconpullUp = react_1.default.memo ? react_1.default.memo(IconpullUp) : IconpullUp;
exports.default = IconpullUp;
