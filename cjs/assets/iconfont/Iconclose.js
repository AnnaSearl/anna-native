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
let Iconclose = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M251.616 179.2l253.44 253.44 253.408-253.44a51.2 51.2 0 1 1 72.416 72.416l-253.44 253.44 253.44 253.408a51.2 51.2 0 1 1-72.416 72.416l-253.44-253.44-253.44 253.44A51.2 51.2 0 1 1 179.2 758.464l253.44-253.44-253.44-253.44A51.2 51.2 0 1 1 251.616 179.2z", fill: helper_1.getIconColor(color, 0, '#BABEC6') })));
};
Iconclose.defaultProps = {
    size: 18,
};
Iconclose = react_1.default.memo ? react_1.default.memo(Iconclose) : Iconclose;
exports.default = Iconclose;
