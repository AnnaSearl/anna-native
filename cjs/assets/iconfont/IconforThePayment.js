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
let IconforThePayment = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M583.392 137.6A24 24 0 0 1 616 160v136h-48v-101.056L305.248 296H176c-3.104 0-6.064 0.592-8.784 1.664l0.16-0.064z", fill: helper_1.getIconColor(color, 0, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M848 296H176A24 24 0 0 0 152 320v544a24 24 0 0 0 24 24h672a24 24 0 0 0 24-24V320a24 24 0 0 0-24-24z m-24 48v496h-624v-496h624z", fill: helper_1.getIconColor(color, 1, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M336 296H176A24 24 0 0 0 152 320v544a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V320a24 24 0 0 0-24-24z m-24 48v496h-112v-496h112zM848 488H672a104 104 0 1 0 0 208h176a24 24 0 0 0 24-24V512a24 24 0 0 0-24-24z m-24 48v112H672a56 56 0 0 1-56-56l0.08-3.072A56 56 0 0 1 672 536h152z", fill: helper_1.getIconColor(color, 2, '#1B2844') })));
};
IconforThePayment.defaultProps = {
    size: 18,
};
IconforThePayment = react_1.default.memo ? react_1.default.memo(IconforThePayment) : IconforThePayment;
exports.default = IconforThePayment;
