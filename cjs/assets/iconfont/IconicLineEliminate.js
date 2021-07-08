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
let IconicLineEliminate = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M166.944 928a32 32 0 0 1-31.36-38.208L203.904 544H192a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h224V128a32 32 0 0 1 32-32h128a32 32 0 0 1 32 32v160h224a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-11.968l68.416 345.792A32 32 0 0 1 857.056 928H166.944z m587.84-384H269.184L205.888 864h178.08L384 736h64v128h128v-128h64v128h178.08l-63.296-320zM800 352H224v128h576v-128z m-256-192h-64v128h64V160z", fill: helper_1.getIconColor(color, 0, '#697184') })));
};
IconicLineEliminate.defaultProps = {
    size: 18,
};
IconicLineEliminate = react_1.default.memo ? react_1.default.memo(IconicLineEliminate) : IconicLineEliminate;
exports.default = IconicLineEliminate;
