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
let Iconedit = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M607.392 160a32 32 0 0 1 3.744 63.776L607.36 224H288a64 64 0 0 0-63.84 59.2L224 288v448a64 64 0 0 0 59.2 63.84L288 800h448a64 64 0 0 0 63.84-59.2L800 736v-286.048a32 32 0 0 1 63.776-3.744l0.224 3.744V736a128 128 0 0 1-121.6 127.84L736 864H288a128 128 0 0 1-127.84-121.6L160 736V288a128 128 0 0 1 121.6-127.84L288 160h319.392z m239.008 40.224a32 32 0 0 1 0 45.28l-316.8 316.8a32 32 0 1 1-45.248-45.28l316.8-316.8a32 32 0 0 1 45.248 0z", fill: helper_1.getIconColor(color, 0, '#697184') })));
};
Iconedit.defaultProps = {
    size: 18,
};
Iconedit = react_1.default.memo ? react_1.default.memo(Iconedit) : Iconedit;
exports.default = Iconedit;
