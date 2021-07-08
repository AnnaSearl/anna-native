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
let IconafterSale = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M848 168a24 24 0 0 1 24 24v640a24 24 0 0 1-24 24H208a24 24 0 0 1-24-24V192a24 24 0 0 1 24-24zM824 416h-592v392h592V416zM467.568 590.816l-31.968 35.808-72.288-64.544a24 24 0 0 1-1.648-34.192l1.808-1.76 72.272-63.44 31.68 36.064L443.2 520h139.664a104 104 0 0 1 3.728 207.936l-3.728 0.064H400v-48h182.864a56 56 0 0 0 3.072-111.92l-3.072-0.08h-140.848l25.552 22.816zM824 216h-592V368h592v-152z", fill: helper_1.getIconColor(color, 0, '#1B2844') })));
};
IconafterSale.defaultProps = {
    size: 18,
};
IconafterSale = react_1.default.memo ? react_1.default.memo(IconafterSale) : IconafterSale;
exports.default = IconafterSale;
