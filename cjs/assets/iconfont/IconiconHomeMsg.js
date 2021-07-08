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
let IconiconHomeMsg = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M865.673846 167.857231a35.367385 35.367385 0 0 1 35.387077 35.367384v555.972923a35.367385 35.367385 0 0 1-35.367385 35.367385l-258.126769-0.019692-70.557538 70.596923a35.367385 35.367385 0 0 1-47.340308 2.422154l-2.678154-2.422154-70.577231-70.596923-258.107076 0.039384c-18.215385 0-33.457231-13.843692-35.190154-32l-0.177231-3.387077V203.224615c0-19.534769 15.852308-35.367385 35.367385-35.367384zM568.772923 538.604308H300.268308c-21.799385 0-39.483077 18.392615-39.483077 41.078154 0 22.705231 17.683692 41.097846 39.483077 41.097846h268.484923c14.099692 0 27.136-7.817846 34.205538-20.539077a42.535385 42.535385 0 0 0 0-41.097846 39.227077 39.227077 0 0 0-34.205538-20.539077z m164.568615-193.516308h-433.033846c-21.819077 0-39.502769 18.392615-39.502769 41.097846 0 22.685538 17.683692 41.078154 39.483077 41.078154h433.033846c21.819077 0 39.483077-18.392615 39.483077-41.078154 0-22.705231-17.664-41.097846-39.463385-41.097846z", fill: helper_1.getIconColor(color, 0, '#407360') })));
};
IconiconHomeMsg.defaultProps = {
    size: 18,
};
IconiconHomeMsg = react_1.default.memo ? react_1.default.memo(IconiconHomeMsg) : IconiconHomeMsg;
exports.default = IconiconHomeMsg;
