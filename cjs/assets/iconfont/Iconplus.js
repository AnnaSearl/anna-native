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
let Iconplus = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M0 0m85.333333 0l853.333334 0q85.333333 0 85.333333 85.333333l0 853.333334q0 85.333333-85.333333 85.333333l-853.333334 0q-85.333333 0-85.333333-85.333333l0-853.333334q0-85.333333 85.333333-85.333333Z", fill: helper_1.getIconColor(color, 0, '#F7F7F7') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 298.666667a21.333333 21.333333 0 0 1 21.333333 21.333333v170.666667h170.666667a21.333333 21.333333 0 0 1 0 42.666666h-170.688L533.333333 704a21.333333 21.333333 0 0 1-42.666666 0l-0.021334-170.666667H320a21.333333 21.333333 0 0 1 0-42.666666h170.666667v-170.666667a21.333333 21.333333 0 0 1 21.333333-21.333333z", fill: helper_1.getIconColor(color, 1, '#495369') })));
};
Iconplus.defaultProps = {
    size: 18,
};
Iconplus = react_1.default.memo ? react_1.default.memo(Iconplus) : Iconplus;
exports.default = Iconplus;
