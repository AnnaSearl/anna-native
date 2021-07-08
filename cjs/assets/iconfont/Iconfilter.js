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
let Iconfilter = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M561.12 896a75.008 75.008 0 0 1-36-8.992l-99.008-54.752a75.008 75.008 0 0 1-38.976-66.016v-314.24a15.008 15.008 0 0 0-6.016-12L152.384 256.992l-3.008-3.008a73.504 73.504 0 0 1-14.24-80.96A73.568 73.568 0 0 1 203.36 128h616.512c30.016 0 56.992 17.28 68.992 44.992 12 27.744 6.752 58.496-13.504 80.992l-2.976 3.008-231.04 185.28a15.008 15.008 0 0 0-5.216 11.968v366.752A75.008 75.008 0 0 1 561.12 896zM191.36 212l227.264 181.504c17.984 14.08 28.48 35.648 28.48 58.496v314.24a15.008 15.008 0 0 0 7.52 13.504l99.008 54.016a15.008 15.008 0 0 0 22.496-13.504V454.24a75.008 75.008 0 0 1 27.744-58.496l228-183.744a15.008 15.008 0 0 0-12-24H203.36a15.008 15.008 0 0 0-12 24z", fill: helper_1.getIconColor(color, 0, '#000000') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M865.6 518.72h-169.472a29.984 29.984 0 1 1 0-59.968h169.504a29.984 29.984 0 1 1 0 60z m0 112.544h-169.472a29.984 29.984 0 1 1 0-60h169.504a29.984 29.984 0 0 1 0 60z m0 111.744h-169.472a29.984 29.984 0 1 1 0-60h169.504a29.984 29.984 0 0 1 0 60z", fill: helper_1.getIconColor(color, 1, '#000000') })));
};
Iconfilter.defaultProps = {
    size: 18,
};
Iconfilter = react_1.default.memo ? react_1.default.memo(Iconfilter) : Iconfilter;
exports.default = Iconfilter;
