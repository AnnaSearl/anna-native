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
let Iconswitch = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M444.534154 189.144615h102.734769v102.73477h-102.734769zM468.775385 746.141538h102.734769v102.73477h-102.734769z", fill: helper_1.getIconColor(color, 0, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M235.126154 646.163692a132.292923 132.292923 0 0 1-3.544616-183.414154l3.544616-3.662769 217.934769-217.954461 41.767385 41.787077-217.93477 217.934769a73.196308 73.196308 0 0 0 100.489847 106.397538l3.032615-2.855384 217.934769-217.954462a132.273231 132.273231 0 0 1 190.601846 183.414154l-3.524923 3.662769L567.492923 791.433846l-41.787077-41.747692 217.954462-217.974154A73.196308 73.196308 0 0 0 643.150769 425.353846l-3.012923 2.855385-217.954461 217.954461a132.273231 132.273231 0 0 1-187.076923 0z", fill: helper_1.getIconColor(color, 1, '#1B2844') })));
};
Iconswitch.defaultProps = {
    size: 18,
};
Iconswitch = react_1.default.memo ? react_1.default.memo(Iconswitch) : Iconswitch;
exports.default = Iconswitch;
