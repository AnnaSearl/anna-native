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
let Iconcompany = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 120A264 264 0 0 1 651.776 608a263.776 263.776 0 0 1 124.224 224 40 40 0 0 1-80 0 184 184 0 0 0-368 0 40 40 0 0 1-80 0 263.808 263.808 0 0 1 124.224-224A264 264 0 0 1 512 120z m0 80a184 184 0 1 0 0 368 184 184 0 0 0 0-368z", fill: helper_1.getIconColor(color, 0, '#333333') })));
};
Iconcompany.defaultProps = {
    size: 18,
};
Iconcompany = react_1.default.memo ? react_1.default.memo(Iconcompany) : Iconcompany;
exports.default = Iconcompany;
