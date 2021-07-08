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
let IcontoSendTheGoods = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M496 216V560h376v192a24 24 0 0 1-21.696 23.888L848 776h-72.352a88 88 0 0 1-175.296 0H423.648a88 88 0 0 1-175.296 0H176a24 24 0 0 1-23.888-21.696L152 752V466.944a72 72 0 0 1 16.832-46.24l2.576-2.944 181.6-194.16a24 24 0 0 1 15.04-7.472l2.48-0.128H496z m-120.8 560h-78.4a40 40 0 0 0 78.4 0z m352 0h-78.4a40 40 0 0 0 78.4 0zM823.984 608H200v120h623.984V608zM448 264h-67.072L206.464 450.56a24 24 0 0 0-5.92 11.248l-0.4 2.56-0.144 2.576V560H448V264z m397.6-48a24 24 0 0 1 24 24v272a24 24 0 0 1-24 24h-288a24 24 0 0 1-24-24V240a24 24 0 0 1 24-24z m-24 48h-240v224h240v-224z", fill: helper_1.getIconColor(color, 0, '#1B2844') })));
};
IcontoSendTheGoods.defaultProps = {
    size: 18,
};
IcontoSendTheGoods = react_1.default.memo ? react_1.default.memo(IcontoSendTheGoods) : IcontoSendTheGoods;
exports.default = IcontoSendTheGoods;
