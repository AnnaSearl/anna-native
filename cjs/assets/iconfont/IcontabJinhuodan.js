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
let IcontabJinhuodan = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M744.727273 139.636364a93.090909 93.090909 0 0 1 93.090909 93.090909v558.545454a93.090909 93.090909 0 0 1-93.090909 93.090909H279.272727a93.090909 93.090909 0 0 1-93.090909-93.090909V232.727273a93.090909 93.090909 0 0 1 93.090909-93.090909h465.454546z m0 58.181818H279.272727a34.909091 34.909091 0 0 0-34.746182 31.557818L244.363636 232.727273v558.545454a34.909091 34.909091 0 0 0 31.557819 34.746182L279.272727 826.181818h465.454546a34.909091 34.909091 0 0 0 34.746182-31.557818L779.636364 791.272727V232.727273a34.909091 34.909091 0 0 0-31.557819-34.746182L744.727273 197.818182z", fill: helper_1.getIconColor(color, 0, '#303135') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M349.090909 512m29.090909 0l267.636364 0q29.090909 0 29.090909 29.090909l0 0q0 29.090909-29.090909 29.090909l-267.636364 0q-29.090909 0-29.090909-29.090909l0 0q0-29.090909 29.090909-29.090909Z", fill: helper_1.getIconColor(color, 1, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M349.090909 628.363636m29.090909 0l267.636364 0q29.090909 0 29.090909 29.090909l0 0q0 29.090909-29.090909 29.09091l-267.636364 0q-29.090909 0-29.090909-29.09091l0 0q0-29.090909 29.090909-29.090909Z", fill: helper_1.getIconColor(color, 2, '#1B2844') })));
};
IcontabJinhuodan.defaultProps = {
    size: 18,
};
IcontabJinhuodan = react_1.default.memo ? react_1.default.memo(IcontabJinhuodan) : IcontabJinhuodan;
exports.default = IcontabJinhuodan;
