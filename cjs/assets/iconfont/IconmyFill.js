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
let IconmyFill = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 581.818182c205.661091 0 372.363636 166.702545 372.363636 372.363636H139.636364c0-205.661091 166.702545-372.363636 372.363636-372.363636z m0-442.181818a186.181818 186.181818 0 1 1 0 372.363636 186.181818 186.181818 0 0 1 0-372.363636z", fill: helper_1.getIconColor(color, 0, '#1B2844') })));
};
IconmyFill.defaultProps = {
    size: 18,
};
IconmyFill = react_1.default.memo ? react_1.default.memo(IconmyFill) : IconmyFill;
exports.default = IconmyFill;
