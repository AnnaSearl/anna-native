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
let IconShareMoments = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z", fill: helper_1.getIconColor(color, 0, '#F7F7F7') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M442.810811 272.743784l163.84 201.188324 4.303567-190.436324A247.420541 247.420541 0 0 0 511.972324 262.918919c-24.008649 0-47.200865 3.473297-69.147675 9.824865z m-148.895135 118.963892l258.117189 26.388756-131.625514-137.686486a248.347676 248.347676 0 0 0-126.491675 111.29773z m-21.171892 189.398486l201.188324-163.867676-190.436324-4.275891a248.403027 248.403027 0 0 0-10.752 168.129729z m118.950054 148.895135L418.082595 471.87027l-137.658811 131.653189a247.005405 247.005405 0 0 0 55.448216 84.535352 247.835676 247.835676 0 0 0 55.821838 41.928648z m189.398486 21.171892l-163.84-201.202162-4.289729 190.464a248.250811 248.250811 0 0 0 168.129729 10.738162z m148.895135-118.963892L471.87027 605.820541l131.653189 137.672648a247.420541 247.420541 0 0 0 84.535352-55.448216 247.185297 247.185297 0 0 0 41.928648-55.849514zM751.159351 442.810811L549.984865 606.650811l190.436324 4.28973a248.306162 248.306162 0 0 0 10.738162-168.12973z m-118.936216-148.895135L605.820541 552.032865l137.686486-131.625514a247.254486 247.254486 0 0 0-55.462054-84.549189 247.891027 247.891027 0 0 0-55.835676-41.928648z", fill: helper_1.getIconColor(color, 1, '#1B2844') })));
};
IconShareMoments.defaultProps = {
    size: 18,
};
IconShareMoments = react_1.default.memo ? react_1.default.memo(IconShareMoments) : IconShareMoments;
exports.default = IconShareMoments;
