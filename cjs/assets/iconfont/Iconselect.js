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
let Iconselect = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M102.304 452.224a48 48 0 0 1 67.872 0l214.912 214.944L833.472 218.88a48 48 0 0 1 67.872 67.872L426.176 761.92a48.544 48.544 0 0 1-3.712 3.328 48 48 0 0 1-71.264 3.744L102.304 520.096a48 48 0 0 1 0-67.872z", fill: helper_1.getIconColor(color, 0, '#333333') })));
};
Iconselect.defaultProps = {
    size: 18,
};
Iconselect = react_1.default.memo ? react_1.default.memo(Iconselect) : Iconselect;
exports.default = Iconselect;
