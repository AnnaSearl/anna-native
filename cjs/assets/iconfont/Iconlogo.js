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
let Iconlogo = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M268.8 147.2m51.84 0l377.856 0q51.84 0 51.84 51.84l0 0q0 51.84-51.84 51.84l-377.856 0q-51.84 0-51.84-51.84l0 0q0-51.84 51.84-51.84Z", fill: helper_1.getIconColor(color, 0, '#407360') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M372.48 199.04v619.776a51.84 51.84 0 1 1-103.68 0V199.04a51.84 51.84 0 1 1 103.68 0z", fill: helper_1.getIconColor(color, 1, '#407360') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M752.64 870.656m-51.84 0l-177.408 0q-51.84 0-51.84-51.84l0 0q0-51.84 51.84-51.84l177.408 0q51.84 0 51.84 51.84l0 0q0 51.84-51.84 51.84Z", fill: helper_1.getIconColor(color, 2, '#407360') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M575.232 487.04v331.776a51.84 51.84 0 0 1-103.68 0V487.04a51.84 51.84 0 0 1 103.68 0zM699.584 557.312c35.2896-29.6192 52.928-54.1824 52.928-73.7024 0-29.28-23.6928-53.0176-52.928-53.0176-29.2288 0-52.928 23.7376-52.928 53.0176 0 19.52 17.6448 44.0832 52.928 73.7024z", fill: helper_1.getIconColor(color, 3, '#407360') })));
};
Iconlogo.defaultProps = {
    size: 18,
};
Iconlogo = react_1.default.memo ? react_1.default.memo(Iconlogo) : Iconlogo;
exports.default = Iconlogo;
