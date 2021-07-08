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
let IconsharePictures = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z", fill: helper_1.getIconColor(color, 0, '#F7F7F7') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M334.875676 312.735135h354.248648a66.421622 66.421622 0 0 1 66.421622 66.421622v265.686486a66.421622 66.421622 0 0 1-66.421622 66.421622H334.875676a66.421622 66.421622 0 0 1-66.421622-66.421622V379.156757a66.421622 66.421622 0 0 1 66.421622-66.421622z", fill: helper_1.getIconColor(color, 1, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M323.805405 401.297297a33.210811 33.210811 0 1 0 66.421622 0 33.210811 33.210811 0 0 0-66.421622 0zM340.590703 657.020541a22.292757 22.292757 0 0 1-19.372973-33.34919l50.798702-88.783567a22.33427 22.33427 0 0 1 38.745946 0l54.770163 95.716324 102.759783-147.788108a22.33427 22.33427 0 0 1 36.656433 0l96.795675 139.222486a22.265081 22.265081 0 0 1-18.335135 34.995892H340.590703v-0.013837z", fill: helper_1.getIconColor(color, 2, '#FFFFFF') })));
};
IconsharePictures.defaultProps = {
    size: 18,
};
IconsharePictures = react_1.default.memo ? react_1.default.memo(IconsharePictures) : IconsharePictures;
exports.default = IconsharePictures;
