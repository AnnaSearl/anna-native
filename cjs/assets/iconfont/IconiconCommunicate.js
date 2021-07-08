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
let IconiconCommunicate = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M896 128a64 64 0 0 1 64 64v576a64 64 0 0 1-64 64h-268.416a64 64 0 0 0-35.456 10.72l-44.64 29.696a64 64 0 0 1-70.912 0l-44.704-29.728A64 64 0 0 0 396.416 832H128a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h768z m0 64H128v576h268.416a128 128 0 0 1 63.744 16.992l7.136 4.416 44.736 29.76 44.64-29.76a128 128 0 0 1 62.528-21.12l8.384-0.288H896V192zM313.6 416a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z m204.8 0a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z m204.8 0a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z", fill: helper_1.getIconColor(color, 0, '#495369') })));
};
IconiconCommunicate.defaultProps = {
    size: 18,
};
IconiconCommunicate = react_1.default.memo ? react_1.default.memo(IconiconCommunicate) : IconiconCommunicate;
exports.default = IconiconCommunicate;
