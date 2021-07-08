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
let IconwaitForReceiving = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M832 202.72a24 24 0 0 1 24 24v576a24 24 0 0 1-24 24H192a24 24 0 0 1-24-24v-576a24 24 0 0 1 24-24z m-216 312a24 24 0 0 1-24 24H432a24 24 0 0 1-24-24V448h-192v330.704h592v-330.72h-192z m-48-264.016h-112v240h112v-240z m240 0h-192v149.28h192v-149.28z m-400 149.28v-149.28h-192v149.28h192z", fill: helper_1.getIconColor(color, 0, '#1B2844') })));
};
IconwaitForReceiving.defaultProps = {
    size: 18,
};
IconwaitForReceiving = react_1.default.memo ? react_1.default.memo(IconwaitForReceiving) : IconwaitForReceiving;
exports.default = IconwaitForReceiving;
