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
let IconiconRightLine = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 8.533333C790.058667 8.533333 1015.466667 233.941333 1015.466667 512S790.058667 1015.466667 512 1015.466667 8.533333 790.058667 8.533333 512 233.941333 8.533333 512 8.533333z m0 85.333334c-230.912 0-418.133333 187.221333-418.133333 418.133333 0 230.912 187.221333 418.133333 418.133333 418.133333 230.912 0 418.133333-187.221333 418.133333-418.133333 0-230.912-187.221333-418.133333-418.133333-418.133333z m229.290667 277.888a42.666667 42.666667 0 0 1 0 60.330666L512 661.376a42.666667 42.666667 0 0 1-60.330667 0l-3.029333-3.285333a43.178667 43.178667 0 0 1-2.986667-2.730667l-120.746666-120.704a42.666667 42.666667 0 1 1 60.373333-60.330667l96.512 96.512 199.168-199.082666a42.666667 42.666667 0 0 1 60.330667 0z", fill: helper_1.getIconColor(color, 0, '#006E43') })));
};
IconiconRightLine.defaultProps = {
    size: 18,
};
IconiconRightLine = react_1.default.memo ? react_1.default.memo(IconiconRightLine) : IconiconRightLine;
exports.default = IconiconRightLine;
