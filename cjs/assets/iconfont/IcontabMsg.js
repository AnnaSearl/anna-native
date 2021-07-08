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
let IcontabMsg = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M522.938182 129.000727c44.194909 1.210182 85.643636 8.610909 124.369454 22.272a292.910545 292.910545 0 0 1 176.64 266.658909v192a90.88 90.88 0 0 1-10.472727 181.341091H653.265455c-7.051636 71.866182-66.071273 126.254545-140.078546 126.254546A140.637091 140.637091 0 0 1 373.108364 791.272727H232.378182a90.88 90.88 0 0 1-10.472727-181.341091v-192A292.910545 292.910545 0 0 1 398.568727 151.272727c36.631273-14.545455 78.08-21.969455 124.392728-22.272zM588.613818 791.272727h-150.900363a76.427636 76.427636 0 0 0 75.450181 62.254546A76.427636 76.427636 0 0 0 588.613818 791.272727z m58.903273-571.950545a243.2 243.2 0 0 0-249.181091 0 230.632727 230.632727 0 0 0-114.129455 197.981091v210.129454c0 23.575273-19.083636 42.658909-42.658909 42.658909h-9.169454a30.301091 30.301091 0 0 0 0 60.602182h581.12a30.301091 30.301091 0 1 0 0-60.602182h-9.169455a42.658909 42.658909 0 0 1-42.682182-42.658909v-210.152727a230.632727 230.632727 0 0 0-114.129454-197.957818z", fill: helper_1.getIconColor(color, 0, '#1B2844') })));
};
IcontabMsg.defaultProps = {
    size: 18,
};
IcontabMsg = react_1.default.memo ? react_1.default.memo(IcontabMsg) : IcontabMsg;
exports.default = IcontabMsg;
