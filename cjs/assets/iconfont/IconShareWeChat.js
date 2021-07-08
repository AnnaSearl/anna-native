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
let IconShareWeChat = (_a) => {
    var { size, color } = _a, rest = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, rest),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z", fill: helper_1.getIconColor(color, 0, '#F7F7F7') }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M610.760649 418.940541c6.503784 0 12.896865 0.484324 19.234594 1.176216-17.269622-79.664432-103.368649-138.862703-201.617297-138.862703-109.844757 0-199.818378 74.087784-199.818378 168.171243 0 54.299676 29.931243 98.899027 79.955027 133.479784l-19.981838 59.502703 69.853405-34.677622c25.004973 4.898595 45.056 9.935568 70.005622 9.935568 6.268541 0 12.467892-0.304432 18.639567-0.788757a145.643243 145.643243 0 0 1-6.171675-41.430487c0-86.389622 74.973405-156.505946 169.900973-156.505945zM503.323676 365.318919c15.055568 0 25.018811 9.824865 25.01881 24.686703 0 14.820324-9.963243 24.76973-25.01881 24.769729-14.986378 0-30.000432-9.949405-30.000433-24.769729 0-14.875676 15.014054-24.686703 30.000433-24.686703z m-139.859027 49.442595c-14.986378 0-30.097297-9.935568-30.097298-24.755892 0-14.875676 15.110919-24.686703 30.097298-24.686703 14.972541 0 24.949622 9.824865 24.949621 24.686703 0 14.820324-9.963243 24.755892-24.949621 24.755892z m429.69254 158.304864c0-79.055568-79.955027-143.498378-169.748757-143.498378-95.065946 0-169.956324 64.442811-169.956324 143.498378 0 79.180108 74.890378 143.498378 169.956324 143.498379 19.898811 0 39.977514-4.953946 59.959352-9.907892l54.811675 29.696-15.027891-49.401081c40.12973-29.792865 70.005622-69.286054 70.005621-113.885406z m-224.864865-24.742054c-9.935568 0-19.968-9.797189-19.968-19.788108 0-9.852541 10.032432-19.77427 19.981838-19.77427 15.110919 0 25.004973 9.92173 25.004973 19.77427 0 9.990919-9.894054 19.788108-25.004973 19.788108z m109.927784 0c-9.866378 0-19.843459-9.797189-19.843459-19.788108 0-9.852541 9.963243-19.77427 19.843459-19.77427 14.986378 0 25.004973 9.92173 25.004973 19.77427 0 9.990919-10.018595 19.788108-25.004973 19.788108z", fill: helper_1.getIconColor(color, 1, '#1B2844') })));
};
IconShareWeChat.defaultProps = {
    size: 18,
};
IconShareWeChat = react_1.default.memo ? react_1.default.memo(IconShareWeChat) : IconShareWeChat;
exports.default = IconShareWeChat;
