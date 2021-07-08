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
let Iconselected = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 64C264.608 64 64 264.608 64 512s200.608 448 448 448 448-200.608 448-448S759.392 64 512 64z", fill: helper_1.getIconColor(color, 0, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M757.504 307.2h-61.568c-13.376 0-26.112 6.304-34.016 17.12l-206.368 280.832-93.472-127.296a42.24 42.24 0 0 0-34.016-17.12H266.496a10.336 10.336 0 0 0-8.544 16.352l163.584 222.592a42.24 42.24 0 0 0 67.904 0l276.48-376.128a10.24 10.24 0 0 0-8.416-16.352z", fill: helper_1.getIconColor(color, 1, '#FFFFFF') })));
};
Iconselected.defaultProps = {
    size: 18,
};
Iconselected = react_1.default.memo ? react_1.default.memo(Iconselected) : Iconselected;
exports.default = Iconselected;
