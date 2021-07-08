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
let IconclassFill = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M465.454545 558.545455v325.818181H139.636364V558.545455h325.818181z m418.909091 0v325.818181H558.545455V558.545455h325.818181zM465.454545 139.636364v325.818181H139.636364V139.636364h325.818181z m418.909091 0v325.818181H558.545455V139.636364h325.818181z", fill: helper_1.getIconColor(color, 0, '#1B2844') })));
};
IconclassFill.defaultProps = {
    size: 18,
};
IconclassFill = react_1.default.memo ? react_1.default.memo(IconclassFill) : IconclassFill;
exports.default = IconclassFill;
