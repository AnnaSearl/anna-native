"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const context_1 = __importDefault(require("./context"));
const ThemeProvider = props => {
    const { theme, setTheme, children } = props;
    return (react_1.default.createElement(context_1.default.Provider, { value: {
            theme,
            setTheme,
        } }, children));
};
exports.default = ThemeProvider;
