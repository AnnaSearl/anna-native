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
let Iconmessage = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M865.685333 167.850667H158.293333c-19.541333 0-35.370667 15.850667-35.370666 35.370666v555.968l0.170666 3.413334c1.728 18.133333 16.981333 32 35.2 32l258.090667-0.064 70.570667 70.613333 2.688 2.410667c14.08 11.456 34.538667 10.410667 47.36-2.432l70.549333-70.592 258.112 0.021333a35.370667 35.370667 0 0 0 35.370667-35.370667V203.242667a35.370667 35.370667 0 0 0-35.370667-35.392z m-35.370666 70.741333v485.205333H592.917333l-3.477333 0.170667a35.370667 35.370667 0 0 0-21.546667 10.197333L512 790.101333l-55.893333-55.914666-2.602667-2.346667a35.370667 35.370667 0 0 0-22.421333-8.021333H193.685333V238.592H830.293333z", fill: helper_1.getIconColor(color, 0, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M350.314667 377.237333h323.264a29.482667 29.482667 0 0 1 0 58.944H350.314667a29.482667 29.482667 0 0 1 0-58.944z m0 153.258667h200.426666a29.482667 29.482667 0 1 1 0 58.965333H350.293333a29.482667 29.482667 0 0 1 0-58.965333z", fill: helper_1.getIconColor(color, 1, '#1B2844'), opacity: ".4" })));
};
Iconmessage.defaultProps = {
    size: 18,
};
Iconmessage = react_1.default.memo ? react_1.default.memo(Iconmessage) : Iconmessage;
exports.default = Iconmessage;
