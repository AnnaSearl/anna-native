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
let IcontabHome = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M762.740364 884.363636h-498.501819C195.723636 884.363636 139.636364 828.206545 139.636364 759.598545V432.058182c0-40.541091 18.688-77.963636 52.968727-99.816727l249.250909-171.543273c43.589818-28.090182 99.677091-28.090182 140.171636 0l249.250909 171.543273c34.257455 21.853091 52.968727 62.394182 52.968728 102.935272v324.421818C887.365818 828.206545 831.278545 884.363636 762.740364 884.363636zM220.625455 369.687273c-21.806545 15.592727-34.280727 37.422545-34.280728 65.489454v324.421818a77.172364 77.172364 0 0 0 77.893818 77.963637h498.478546a77.172364 77.172364 0 0 0 77.893818-77.963637V432.058182c0-24.948364-12.474182-49.896727-34.280727-65.489455l-249.250909-171.566545c-24.901818-18.711273-62.301091-18.711273-87.226182 0L220.625455 369.687273z", fill: helper_1.getIconColor(color, 0, '#1B2844') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M426.146909 628.363636h171.706182c15.243636 0 30.510545 13.102545 30.510545 34.909091 0 17.454545-11.450182 34.909091-30.510545 34.909091H426.123636C410.903273 698.181818 395.636364 685.079273 395.636364 663.272727c0-21.829818 11.450182-34.909091 30.510545-34.909091z", fill: helper_1.getIconColor(color, 1, '#1B2844') })));
};
IcontabHome.defaultProps = {
    size: 18,
};
IcontabHome = react_1.default.memo ? react_1.default.memo(IcontabHome) : IcontabHome;
exports.default = IcontabHome;
