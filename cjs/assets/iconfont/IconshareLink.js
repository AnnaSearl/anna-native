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
let IconshareLink = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z", fill: helper_1.getIconColor(color, 0, '#F7F7F7') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M462.432865 487.216432l-61.993514 61.938163a35.051243 35.051243 0 0 0 0 49.59481l24.797406 24.76973a35.051243 35.051243 0 0 0 49.580973 0l61.965838-61.965838a70.116324 70.116324 0 0 1 0 99.148108l-86.763244 86.763244a52.583784 52.583784 0 0 1-74.350702 0l-99.161946-99.148108a52.583784 52.583784 0 0 1 0-74.350703l86.763243-86.763243a70.116324 70.116324 0 0 1 99.161946 0z m99.13427 49.567136l61.993514-61.965838a35.051243 35.051243 0 0 0 0-49.580973l-24.797406-24.783568a35.051243 35.051243 0 0 0-49.580973 0l-61.965838 61.979676a70.116324 70.116324 0 0 1 0-99.161946l86.763244-86.763243a52.583784 52.583784 0 0 1 74.350702 0l99.161946 99.161946a52.583784 52.583784 0 0 1 0 74.350702l-86.763243 86.763244a70.116324 70.116324 0 0 1-99.161946 0z m-123.917838 24.783567l123.917838-123.917838a17.532541 17.532541 0 0 1 24.797406 24.76973l-123.931676 123.931676a17.532541 17.532541 0 1 1-24.797406-24.76973z", fill: helper_1.getIconColor(color, 1, '#1B2844') })));
};
IconshareLink.defaultProps = {
    size: 18,
};
IconshareLink = react_1.default.memo ? react_1.default.memo(IconshareLink) : IconshareLink;
exports.default = IconshareLink;
