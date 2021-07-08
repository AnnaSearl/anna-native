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
let IconlinePhoto = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M881.572571 146.304a68.809143 68.809143 0 0 1 69.138286 64.329143l0.146286 3.657143v632.027428a70.4 70.4 0 0 1-65.682286 67.821715l-3.602286 0.146285H142.427429a68.809143 68.809143 0 0 1-69.138286-64.329143l-0.146286-3.657142 0.018286-634.459429A67.419429 67.419429 0 0 1 138.843429 146.285714h742.729142zM140.909714 201.142857a12.598857 12.598857 0 0 0-12.708571 9.984L128 213.065143v632.594286c0.073143 7.021714 5.357714 12.8 12.452571 13.659428l1.974858 0.109714h738.322285a15.542857 15.542857 0 0 0 15.104-13.110857l0.146286-1.682285V214.930286a13.952 13.952 0 0 0-12.434286-13.641143L881.554286 201.142857 140.909714 201.142857z m694.674286 137.563429a18.285714 18.285714 0 0 1 5.558857 13.129143V768a36.571429 36.571429 0 0 1-36.571428 36.571429H209.078857a18.285714 18.285714 0 0 1-14.628571-29.257143l165.851428-221.257143a18.285714 18.285714 0 0 1 24.832-4.205714l107.904 72.685714a36.571429 36.571429 0 0 0 46.701715-4.864l269.988571-278.564572a18.285714 18.285714 0 0 1 25.856-0.402285zM236.452571 256l1.462858 0.018286c28.745143-0.091429 52.425143 22.637714 54.509714 51.620571L292.571429 310.857143c0.073143 30.208-23.771429 54.747429-53.302858 54.838857h-0.676571l-0.676571-0.018286c-29.586286 0.822857-54.217143-23.04-55.04-53.339428-0.804571-30.281143 22.509714-55.497143 52.114285-56.32l1.462857-0.036572z", fill: helper_1.getIconColor(color, 0, '#333333') })));
};
IconlinePhoto.defaultProps = {
    size: 18,
};
IconlinePhoto = react_1.default.memo ? react_1.default.memo(IconlinePhoto) : IconlinePhoto;
exports.default = IconlinePhoto;
