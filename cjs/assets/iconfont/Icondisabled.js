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
let Icondisabled = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 51.2c254.49 0 460.8 206.31 460.8 460.8S766.49 972.8 512 972.8 51.2 766.49 51.2 512 257.51 51.2 512 51.2z m307.149 189.824L241.024 819.149A408.064 408.064 0 0 0 512 921.6c226.227 0 409.6-183.373 409.6-409.6a408.064 408.064 0 0 0-102.451-270.976zM512 102.4c-226.227 0-409.6 183.373-409.6 409.6a408.064 408.064 0 0 0 102.451 270.976l578.125-578.125A408.064 408.064 0 0 0 512 102.4z", fill: helper_1.getIconColor(color, 0, '#333333') })));
};
Icondisabled.defaultProps = {
    size: 18,
};
Icondisabled = react_1.default.memo ? react_1.default.memo(Icondisabled) : Icondisabled;
exports.default = Icondisabled;
