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
let Iconback = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M349.098667 520.213333L635.712 806.826667a21.333333 21.333333 0 0 1 0 30.165333l-30.165333 30.165333a21.333333 21.333333 0 0 1-30.165334 0L228.416 520.213333a21.333333 21.333333 0 0 1 0-30.165333L575.381333 143.082667a21.333333 21.333333 0 0 1 30.165334 0l30.165333 30.165333a21.333333 21.333333 0 0 1 0 30.186667L349.098667 490.026667a21.333333 21.333333 0 0 0 0 30.165333z", fill: helper_1.getIconColor(color, 0, '#1B2844') })));
};
Iconback.defaultProps = {
    size: 18,
};
Iconback = react_1.default.memo ? react_1.default.memo(Iconback) : Iconback;
exports.default = Iconback;
