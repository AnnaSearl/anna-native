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
let IconlineWarning = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 96c229.76 0 416 186.24 416 416s-186.24 416-416 416S96 741.76 96 512 282.24 96 512 96z m0 64C317.6 160 160 317.6 160 512s157.6 352 352 352 352-157.6 352-352S706.4 160 512 160z m0 480a32 32 0 1 1 0 64 32 32 0 0 1 0-64z m0-320a32 32 0 0 1 32 32v224a32 32 0 0 1-64 0v-224a32 32 0 0 1 32-32z", fill: helper_1.getIconColor(color, 0, '#333333') })));
};
IconlineWarning.defaultProps = {
    size: 18,
};
IconlineWarning = react_1.default.memo ? react_1.default.memo(IconlineWarning) : IconlineWarning;
exports.default = IconlineWarning;
