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
let IcondeleteLajitong = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M768 353.952a32 32 0 0 1 31.776 28.256l0.224 3.744V736a128 128 0 0 1-121.6 127.84L672 864H352a128 128 0 0 1-127.84-121.6L224 736V385.952a32 32 0 0 1 63.776-3.744l0.224 3.744V736a64 64 0 0 0 59.2 63.84L352 800h320a64 64 0 0 0 63.84-59.2L736 736V385.952a32 32 0 0 1 32-32zM448 352a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0v-288a32 32 0 0 1 32-32z m128 0a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0v-288a32 32 0 0 1 32-32z m32-224a32 32 0 0 1 0 64h192a32 32 0 0 1 0 64H224a32 32 0 1 1 0-64h192a32 32 0 0 1 0-64h192z", fill: helper_1.getIconColor(color, 0, '#697184') })));
};
IcondeleteLajitong.defaultProps = {
    size: 18,
};
IcondeleteLajitong = react_1.default.memo ? react_1.default.memo(IcondeleteLajitong) : IcondeleteLajitong;
exports.default = IcondeleteLajitong;
