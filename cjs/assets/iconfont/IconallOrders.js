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
let IconallOrders = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M800 168a24 24 0 0 1 24 24v640a24 24 0 0 1-24 24H224a24 24 0 0 1-24-24V192a24 24 0 0 1 24-24h104v48h-80v592h528v-592h-80v-48z", fill: helper_1.getIconColor(color, 0, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M672 120H352A24 24 0 0 0 328 144v128a24 24 0 0 0 24 24h320a24 24 0 0 0 24-24V144A24 24 0 0 0 672 120z m-24 48v80h-272v-80h272z", fill: helper_1.getIconColor(color, 1, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M368 656h192v64H368zM368 512h288v64H368zM368 368h288v64H368z", fill: helper_1.getIconColor(color, 2, '#1B2844') })));
};
IconallOrders.defaultProps = {
    size: 18,
};
IconallOrders = react_1.default.memo ? react_1.default.memo(IconallOrders) : IconallOrders;
exports.default = IconallOrders;
