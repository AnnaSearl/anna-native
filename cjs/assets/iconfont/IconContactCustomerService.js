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
let IconContactCustomerService = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 85.333333c233.173333 0 422.677333 187.072 426.602667 419.328L938.666667 512v213.333333h-85.333334V512c0-188.522667-152.810667-341.333333-341.333333-341.333333-186.261333 0-337.706667 149.205333-341.269333 334.613333L170.666667 512v213.333333H85.333333V512C85.333333 276.352 276.352 85.333333 512 85.333333z", fill: helper_1.getIconColor(color, 0, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M234.666667 554.666667h64a85.333333 85.333333 0 0 1 85.333333 85.333333v170.666667a85.333333 85.333333 0 0 1-85.333333 85.333333h-64a21.333333 21.333333 0 0 1-21.333334-21.333333V576a21.333333 21.333333 0 0 1 21.333334-21.333333zM789.333333 554.666667h-64a85.333333 85.333333 0 0 0-85.333333 85.333333v170.666667a85.333333 85.333333 0 0 0 85.333333 85.333333h64a21.333333 21.333333 0 0 0 21.333334-21.333333V576a21.333333 21.333333 0 0 0-21.333334-21.333333z", fill: helper_1.getIconColor(color, 1, '#1B2844') })));
};
IconContactCustomerService.defaultProps = {
    size: 18,
};
IconContactCustomerService = react_1.default.memo ? react_1.default.memo(IconContactCustomerService) : IconContactCustomerService;
exports.default = IconContactCustomerService;
