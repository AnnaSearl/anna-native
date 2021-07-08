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
let IconIcFilSelect = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 51.2c254.4896 0 460.8 206.3104 460.8 460.8s-206.3104 460.8-460.8 460.8S51.2 766.4896 51.2 512 257.5104 51.2 512 51.2z m217.216 308.48a25.6 25.6 0 0 0-36.1984 0l-235.3664 235.3408L349.0816 486.4a25.6 25.6 0 0 0-36.1984 36.1984l126.72 126.72a25.6 25.6 0 0 0 36.1984 0l253.44-253.44a25.6 25.6 0 0 0 0-36.1984z", fill: helper_1.getIconColor(color, 0, '#2C755F') })));
};
IconIcFilSelect.defaultProps = {
    size: 18,
};
IconIcFilSelect = react_1.default.memo ? react_1.default.memo(IconIcFilSelect) : IconIcFilSelect;
exports.default = IconIcFilSelect;
