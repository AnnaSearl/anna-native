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
let IcontabIconZhaohuo = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M826.254222 150.368711a89.793422 89.793422 0 0 1 89.770667 89.770667v471.358578a89.793422 89.793422 0 0 1-80.008533 89.247288l-165.933512 18.158934a149.640533 149.640533 0 0 0-62.213688 21.344711l-80.167823 49.379555c-9.6256 5.916444-21.777067 5.916444-31.402666 0l-80.190578-49.379555a149.640533 149.640533 0 0 0-62.190933-21.344711L187.960889 800.768a89.793422 89.793422 0 0 1-80.008533-89.247289V240.139378A89.793422 89.793422 0 0 1 197.745778 150.368711h628.508444z m0 68.266667H197.745778a21.526756 21.526756 0 0 0-21.390222 19.000889l-0.113778 2.503111v471.358578c0 10.148978 7.031467 18.773333 16.702578 20.980622l2.4576 0.4096 165.933511 18.158933a217.9072 217.9072 0 0 1 82.989511 26.624l7.5776 4.437333L512 819.108978l60.074667-37.000534a217.9072 217.9072 0 0 1 81.851733-29.923555l8.738133-1.137778 165.933511-18.158933a21.526756 21.526756 0 0 0 19.023645-18.887111l0.136533-2.503111V240.139378a21.526756 21.526756 0 0 0-19.000889-21.367467l-2.503111-0.136533z", fill: helper_1.getIconColor(color, 0, '#303135') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M620.475733 442.299733a34.133333 34.133333 0 1 1 51.131734 45.238045 213.151289 213.151289 0 0 1-160.017067 72.0896 213.151289 213.151289 0 0 1-159.789511-71.862045 34.133333 34.133333 0 0 1 51.040711-45.329066 144.884622 144.884622 0 0 0 108.771556 48.924444 144.907378 144.907378 0 0 0 108.862577-49.060978z", fill: helper_1.getIconColor(color, 1, '#303135') })));
};
IcontabIconZhaohuo.defaultProps = {
    size: 18,
};
IcontabIconZhaohuo = react_1.default.memo ? react_1.default.memo(IcontabIconZhaohuo) : IcontabIconZhaohuo;
exports.default = IcontabIconZhaohuo;
