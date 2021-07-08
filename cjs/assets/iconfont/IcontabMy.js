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
let IcontabMy = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M356.173913 890.434783m27.826087 0l256 0q27.826087 0 27.826087 27.826087l0 0q0 27.826087-27.826087 27.826087l-256 0q-27.826087 0-27.826087-27.826087l0 0q0-27.826087 27.826087-27.826087Z", fill: helper_1.getIconColor(color, 0, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M712.347826 178.086957a133.565217 133.565217 0 0 1 133.565217 133.565217v200.347826c0 184.409043-149.504 333.913043-333.913043 333.913043-184.409043 0-333.913043-149.504-333.913043-333.913043 0-184.409043 149.504-333.913043 333.913043-333.913043h200.347826z m0 55.652173h-200.347826C358.310957 233.73913 233.73913 358.310957 233.73913 512S358.310957 790.26087 512 790.26087c151.373913 0 274.543304-120.876522 278.171826-271.404522L790.26087 512v-200.347826a77.913043 77.913043 0 0 0-73.638957-77.801739L712.347826 233.73913z", fill: helper_1.getIconColor(color, 1, '#1B2844') })));
};
IcontabMy.defaultProps = {
    size: 18,
};
IcontabMy = react_1.default.memo ? react_1.default.memo(IcontabMy) : IcontabMy;
exports.default = IcontabMy;
