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
let Iconphone = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z", fill: helper_1.getIconColor(color, 0, '#F7F7F7') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M405.725405 259.597838a32.892541 32.892541 0 0 0-33.21081 33.210811v438.382702c0 18.598054 14.612757 33.210811 33.21081 33.210811h212.54919c18.598054 0 33.210811-14.612757 33.21081-33.210811V292.808649c0-18.598054-14.612757-33.210811-33.21081-33.210811H405.725405z", fill: helper_1.getIconColor(color, 1, '#1B2844'), opacity: ".3" }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M405.725405 259.597838a32.892541 32.892541 0 0 0-33.21081 33.210811v438.382702c0 18.598054 14.612757 33.210811 33.21081 33.210811h212.54919c18.598054 0 33.210811-14.612757 33.21081-33.210811V292.808649c0-18.598054-14.612757-33.210811-33.21081-33.210811H405.725405z m0-39.852973h212.54919c39.852973 0 73.063784 33.210811 73.063783 73.063784v438.382702c0 39.852973-33.210811 73.063784-73.063783 73.063784H405.725405c-39.852973 0-73.063784-33.210811-73.063783-73.063784V292.808649c0-39.852973 33.210811-73.063784 73.063783-73.063784z m39.852973 19.926486h132.843244c7.970595 0 13.284324 5.31373 13.284324 13.284325v26.568648c0 7.970595-5.31373 13.284324-13.284324 13.284325h-132.843244c-7.970595 0-13.284324-5.31373-13.284324-13.284325v-26.568648c0-7.970595 5.31373-13.284324 13.284324-13.284325z", fill: helper_1.getIconColor(color, 2, '#1B2844') })));
};
Iconphone.defaultProps = {
    size: 18,
};
Iconphone = react_1.default.memo ? react_1.default.memo(Iconphone) : Iconphone;
exports.default = Iconphone;
