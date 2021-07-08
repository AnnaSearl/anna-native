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
let Icondelete = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M537.6 102.4c226.2272 0 409.6 183.3728 409.6 409.6s-183.3728 409.6-409.6 409.6S128 738.2272 128 512 311.3728 102.4 537.6 102.4z m0 51.2C339.6608 153.6 179.2 314.0608 179.2 512s160.4608 358.4 358.4 358.4 358.4-160.4608 358.4-358.4S735.5392 153.6 537.6 153.6z m217.6 332.8a38.4 38.4 0 0 1 0 76.8h-435.2a38.4 38.4 0 0 1 0-76.8h435.2z", fill: helper_1.getIconColor(color, 0, '#F81A33') })));
};
Icondelete.defaultProps = {
    size: 18,
};
Icondelete = react_1.default.memo ? react_1.default.memo(Icondelete) : Icondelete;
exports.default = Icondelete;
