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
let IconpurchaselistFill = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M325.818182 162.909091v46.545454a46.545455 46.545455 0 0 0 43.054545 46.429091L372.363636 256h279.272728a46.545455 46.545455 0 0 0 46.429091-43.054545L698.181818 209.454545V162.909091h116.363637a23.272727 23.272727 0 0 1 23.272727 23.272727v698.181818a23.272727 23.272727 0 0 1-23.272727 23.272728H209.454545a23.272727 23.272727 0 0 1-23.272727-23.272728V186.181818a23.272727 23.272727 0 0 1 23.272727-23.272727h116.363637z m349.090909 512H349.090909a23.272727 23.272727 0 0 0-23.109818 20.549818L325.818182 698.181818v23.272727a23.272727 23.272727 0 0 0 20.549818 23.109819L349.090909 744.727273h325.818182a23.272727 23.272727 0 0 0 23.109818-20.549818L698.181818 721.454545v-23.272727a23.272727 23.272727 0 0 0-23.272727-23.272727z m0-139.636364H349.090909a23.272727 23.272727 0 0 0-23.109818 20.549818L325.818182 558.545455v23.272727a23.272727 23.272727 0 0 0 20.549818 23.109818L349.090909 605.090909h325.818182a23.272727 23.272727 0 0 0 23.109818-20.549818L698.181818 581.818182v-23.272727a23.272727 23.272727 0 0 0-23.272727-23.272728z m0-139.636363H349.090909a23.272727 23.272727 0 0 0-23.109818 20.549818L325.818182 418.909091v23.272727a23.272727 23.272727 0 0 0 20.549818 23.109818L349.090909 465.454545h325.818182a23.272727 23.272727 0 0 0 23.109818-20.549818L698.181818 442.181818v-23.272727a23.272727 23.272727 0 0 0-23.272727-23.272727zM628.363636 116.363636a23.272727 23.272727 0 0 1 23.272728 23.272728v46.545454a23.272727 23.272727 0 0 1-23.272728 23.272727H395.636364a23.272727 23.272727 0 0 1-23.272728-23.272727V139.636364a23.272727 23.272727 0 0 1 23.272728-23.272728h232.727272z", fill: helper_1.getIconColor(color, 0, '#1B2844') })));
};
IconpurchaselistFill.defaultProps = {
    size: 18,
};
IconpurchaselistFill = react_1.default.memo ? react_1.default.memo(IconpurchaselistFill) : IconpurchaselistFill;
exports.default = IconpurchaselistFill;
