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
let Iconshare = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M529.792 160a32 32 0 0 1 4.352 63.701333l-4.352 0.298667H230.912a28.245333 28.245333 0 0 0-27.946667 24.064l-0.298666 4.181333v562.176c0 14.165333 10.453333 25.941333 24.064 27.946667l4.181333 0.298667h562.176a28.245333 28.245333 0 0 0 27.946667-24.064l0.298666-4.181334v-289.706666a32 32 0 0 1 63.701334-4.352l0.298666 4.352v289.706666a92.245333 92.245333 0 0 1-85.632 92.032l-6.613333 0.213334H230.912a92.245333 92.245333 0 0 1-92.032-85.632l-0.213333-6.613334V252.245333c0-48.725333 37.802667-88.618667 85.632-92.032l6.613333-0.213333h298.88z", fill: helper_1.getIconColor(color, 0, '#142848') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M502.314667 572.16a29.269333 29.269333 0 0 1-29.141334-29.141333c0-7.68 3.072-15.104 8.533334-20.565334l349.141333-349.056a29.098667 29.098667 0 0 1 41.088 41.088l-349.056 349.098667a29.269333 29.269333 0 0 1-20.565333 8.533333z", fill: helper_1.getIconColor(color, 1, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M851.413333 223.018667h-155.178666a29.098667 29.098667 0 1 1 0-58.154667h155.178666a29.098667 29.098667 0 1 1 0 58.154667z", fill: helper_1.getIconColor(color, 2, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M851.413333 378.197333a29.098667 29.098667 0 0 1-29.098666-29.098666V193.92a29.098667 29.098667 0 1 1 58.154666 0v155.178667a29.098667 29.098667 0 0 1-29.056 29.098666z", fill: helper_1.getIconColor(color, 3, '#1B2844') })));
};
Iconshare.defaultProps = {
    size: 18,
};
Iconshare = react_1.default.memo ? react_1.default.memo(Iconshare) : Iconshare;
exports.default = Iconshare;
