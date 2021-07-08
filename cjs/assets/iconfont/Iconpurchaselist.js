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
let Iconpurchaselist = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M228.47488 210.78016v620.544h555.33568V210.7392h-84.29568v42.1888a22.1184 22.1184 0 0 1-22.07744 22.03648H334.848a22.1184 22.1184 0 0 1-22.07744-22.07744v-42.1888l-84.29568 0.04096zM655.36 146.55488H356.92544v84.29568H655.36V146.55488z m-342.58944-22.07744a22.1184 22.1184 0 0 1 22.1184-22.07744h342.54848a22.1184 22.1184 0 0 1 22.1184 22.1184l-0.04096 42.10688h106.37312a22.1184 22.1184 0 0 1 21.79072 18.51392l0.28672 3.56352v664.69888a22.1184 22.1184 0 0 1-18.47296 21.79072l-3.60448 0.28672H206.4384a22.1184 22.1184 0 0 1-21.79072-18.51392L184.32 853.4016V188.70272a22.1184 22.1184 0 0 1 18.51392-21.79072l3.56352-0.28672h106.37312z", fill: helper_1.getIconColor(color, 0, '#182846') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M356.27008 659.74272h299.74528v64.22528H356.27008zM356.27008 531.29216h299.74528v64.22528H356.27008zM356.27008 402.8416h299.74528v64.22528H356.27008z", fill: helper_1.getIconColor(color, 1, '#1B2844') })));
};
Iconpurchaselist.defaultProps = {
    size: 18,
};
Iconpurchaselist = react_1.default.memo ? react_1.default.memo(Iconpurchaselist) : Iconpurchaselist;
exports.default = Iconpurchaselist;
