"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const safe_filling_1 = __importDefault(require("../safe-filling"));
const SafeArea = props => {
    const { topColor, bottomColor, topInset = true, bottomInset, topStyle, bottomStyle, native, style, children } = props, restProps = __rest(props, ["topColor", "bottomColor", "topInset", "bottomInset", "topStyle", "bottomStyle", "native", "style", "children"]);
    return native ? (React.createElement(react_native_1.SafeAreaView, Object.assign({}, props), children)) : (React.createElement(react_native_1.View, Object.assign({ style: [styles.container, style] }, restProps),
        topInset ? React.createElement(safe_filling_1.default, { style: topStyle, backgroundColor: topColor || '#FFFFFF' }) : null,
        children,
        bottomInset ? (React.createElement(safe_filling_1.default, { bottom: true, style: bottomStyle, backgroundColor: bottomColor || '#FFFFFF' })) : null));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
exports.default = SafeArea;
