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
let Iconlocation2 = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M496 960c-9.184 0-18.4-2.784-26.208-8.384C455.84 941.6 128 704.64 128 454.464 128 256.768 293.056 96 496 96S864 256.768 864 454.464c0 250.176-327.84 487.232-341.792 497.152A44.8 44.8 0 0 1 496 960z m0-777.6c-153.984 0-279.296 122.048-279.296 272.064 0 170.016 205.216 348.512 279.296 407.36 74.08-58.848 279.296-237.344 279.296-407.36 0-150.08-125.312-272.064-279.296-272.064z", fill: helper_1.getIconColor(color, 0, '#333333') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M495.936 640A176.16 176.16 0 0 1 320 464c0-97.056 78.912-176 175.936-176A176.224 176.224 0 0 1 672 464c0 97.056-79.04 176-176.064 176z m0-262.24a86.304 86.304 0 0 0-86.208 86.24 86.304 86.304 0 0 0 86.208 86.24 86.304 86.304 0 0 0 86.24-86.24 86.304 86.304 0 0 0-86.24-86.24z", fill: helper_1.getIconColor(color, 1, '#A4A9B4') })));
};
Iconlocation2.defaultProps = {
    size: 18,
};
Iconlocation2 = react_1.default.memo ? react_1.default.memo(Iconlocation2) : Iconlocation2;
exports.default = Iconlocation2;
