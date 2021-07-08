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
let Iconlocation = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M511.424 885.994667c-7.765333 0-15.509333-2.410667-22.08-7.253334-11.754667-8.661333-288-213.653333-288-430.08 0-170.986667 139.072-310.08 310.08-310.08 170.986667 0 310.08 139.093333 310.08 310.08 0 216.426667-276.266667 421.504-288 430.08-6.506667 4.842667-14.336 7.253333-22.08 7.253334z m0-672.661334C381.653333 213.333333 276.053333 318.933333 276.053333 448.661333c0 147.093333 172.928 301.504 235.349334 352.426667 62.4-50.922667 235.306667-205.333333 235.306666-352.426667 0-129.834667-105.557333-235.328-235.306666-235.328z", fill: helper_1.getIconColor(color, 0, '#333333') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M511.424 595.093333a146.56 146.56 0 0 1-146.432-146.432 146.56 146.56 0 0 1 146.432-146.410666c80.746667 0 146.496 65.664 146.496 146.410666 0 80.746667-65.749333 146.432-146.496 146.432z m0-218.176a71.808 71.808 0 0 0-71.765333 71.744 71.808 71.808 0 0 0 71.765333 71.765334 71.808 71.808 0 0 0 71.744-71.765334 71.808 71.808 0 0 0-71.744-71.744z", fill: helper_1.getIconColor(color, 1, '#A4A9B4') })));
};
Iconlocation.defaultProps = {
    size: 18,
};
Iconlocation = react_1.default.memo ? react_1.default.memo(Iconlocation) : Iconlocation;
exports.default = Iconlocation;
