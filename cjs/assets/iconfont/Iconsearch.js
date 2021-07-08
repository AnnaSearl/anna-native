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
let Iconsearch = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1056 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 96c212.064 0 384 171.936 384 384 0 98.592-37.152 188.512-98.24 256.512l97.44 97.44a32 32 0 1 1-45.248 45.248l-98.752-98.784A382.4 382.4 0 0 1 512 864C299.936 864 128 692.064 128 480S299.936 96 512 96z m0 64C335.264 160 192 303.264 192 480s143.264 320 320 320 320-143.264 320-320S688.736 160 512 160z", fill: helper_1.getIconColor(color, 0, '#1B2844') })));
};
Iconsearch.defaultProps = {
    size: 18,
};
Iconsearch = react_1.default.memo ? react_1.default.memo(Iconsearch) : Iconsearch;
exports.default = Iconsearch;
