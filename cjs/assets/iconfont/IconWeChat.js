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
let IconWeChat = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M664.256 368.533333c10.026667 0 19.882667 0.746667 29.653333 1.813334-26.624-122.816-159.36-214.08-310.826666-214.08-169.344 0-308.053333 114.218667-308.053334 259.264 0 83.712 46.144 152.469333 123.264 205.781333l-30.805333 91.733333 107.690667-53.461333c38.549333 7.552 69.461333 15.317333 107.925333 15.317333 9.664 0 19.221333-0.469333 28.736-1.216a224.533333 224.533333 0 0 1-9.514667-63.872c0-133.184 115.584-241.28 261.930667-241.28zM498.624 285.866667c23.210667 0 38.570667 15.146667 38.570667 38.058666 0 22.848-15.36 38.186667-38.570667 38.186667-23.104 0-46.250667-15.338667-46.250667-38.186667 0-22.933333 23.146667-38.058667 46.250667-38.058666z m-215.616 76.224c-23.104 0-46.4-15.317333-46.4-38.165334 0-22.933333 23.296-38.058667 46.4-38.058666 23.082667 0 38.464 15.146667 38.464 38.058666 0 22.848-15.36 38.165333-38.464 38.165334z m662.442667 244.053333c0-121.877333-123.264-221.226667-261.696-221.226667-146.56 0-262.016 99.349333-262.016 221.226667 0 122.069333 115.456 221.226667 262.016 221.226667 30.677333 0 61.632-7.637333 92.437333-15.274667l84.501333 45.781333-23.168-76.16c61.866667-45.930667 107.925333-106.816 107.925334-175.573333z m-346.666667-38.144c-15.317333 0-30.784-15.104-30.784-30.506667 0-15.189333 15.466667-30.485333 30.805333-30.485333 23.296 0 38.549333 15.296 38.549334 30.485333 0 15.402667-15.253333 30.506667-38.549334 30.506667z m169.472 0c-15.210667 0-30.592-15.104-30.592-30.506667 0-15.189333 15.36-30.485333 30.592-30.485333 23.104 0 38.549333 15.296 38.549333 30.485333 0 15.402667-15.445333 30.506667-38.549333 30.506667z", fill: helper_1.getIconColor(color, 0, '#1B2844') })));
};
IconWeChat.defaultProps = {
    size: 18,
};
IconWeChat = react_1.default.memo ? react_1.default.memo(IconWeChat) : IconWeChat;
exports.default = IconWeChat;
