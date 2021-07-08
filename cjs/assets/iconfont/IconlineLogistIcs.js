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
let IconlineLogistIcs = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M128 800a64 64 0 0 1-64-64V507.968a64 64 0 0 1 18.464-44.992l90.816-91.936A64 64 0 0 1 218.816 352H384V224a64 64 0 0 1 64-64h448a64 64 0 0 1 64 64v512a64 64 0 0 1-64 64H736a64 64 0 1 1-128 0H448a63.68 63.68 0 0 1-32.032-8.576C406.592 796.864 395.648 800 384 800h-96a64 64 0 1 1-128 0h-32z m768-576H448v512h448V224zM384 416H218.816L128 507.968V736h256V416z", fill: helper_1.getIconColor(color, 0, '#333333') })));
};
IconlineLogistIcs.defaultProps = {
    size: 18,
};
IconlineLogistIcs = react_1.default.memo ? react_1.default.memo(IconlineLogistIcs) : IconlineLogistIcs;
exports.default = IconlineLogistIcs;
